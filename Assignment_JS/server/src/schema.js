const mongoose = require('./config');

const questionSchema = new mongoose.Schema({
    type: String,
    title: String,
    siblingId: mongoose.Schema.Types.ObjectId,
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
