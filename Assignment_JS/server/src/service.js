const Question = require('./schema');

async function searchQuestions(call, callback) {
    try {
        const query = call.request.query;
        const page = call.request.page || 1;
        const pageSize = call.request.pageSize || 10;
        const skip = (page - 1) * pageSize;

        const docs = await Question.find({ title: new RegExp(query, 'i') })
            .skip(skip)
            .limit(pageSize);

        const count = await Question.countDocuments({ title: new RegExp(query, 'i') });

        const questions = docs.map((doc) => ({
            id: doc._id.toString(),
            type: doc.type,
            title: doc.title,
            siblingId: doc.siblingId ? doc.siblingId.toString() : null,
        }));

        callback(null, {
            questions,
            totalResults: count,
            totalPages: Math.ceil(count / pageSize),
        });
    } catch (err) {
        callback(err, null);
    }
}

module.exports = { searchQuestions };
