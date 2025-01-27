import React, { useState, useEffect } from 'react';
import { searchQuestions } from './GrpcClient';
import './App.css'; // Import the CSS file

const QuestionsComponent = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [questions, setQuestions] = useState([]);
	const [page, setPage] = useState(1);
	const [pageSize] = useState(20); // Set page size to 20
	const [totalResults, setTotalResults] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const [selectedQuestion, setSelectedQuestion] = useState(null);

	useEffect(() => {
		searchQuestions(searchQuery, page, pageSize)
			.then(({ questions, totalResults, totalPages }) => {
				setQuestions(questions);
				setTotalResults(totalResults);
				setTotalPages(totalPages);
			})
			.catch((err) => console.error(err));
	}, [searchQuery, page, pageSize]);

	const handleSearch = (e) => {
		e.preventDefault();
		setPage(1); // Reset to first page on new search
		setSearchQuery(e.target.search.value);
	};

	const handlePageChange = (newPage) => {
		if (newPage > 0 && newPage <= totalPages) {
			setPage(newPage);
		}
	};

	const handleQuestionClick = (question) => {
		setSelectedQuestion(question);
	};

	const closeModal = () => {
		setSelectedQuestion(null);
	};

	return (
		<div>
			<form onSubmit={handleSearch}>
				<input type="text" name="search" placeholder="Search questions..." />
				<button type="submit">Search</button>
			</form>
			<div className="question-list">
				{questions.map((question) => (
					<div
						key={question.id}
						className="question-item"
						onClick={() => handleQuestionClick(question)}
					>
						<h3>{question.title}</h3>
						<p>{question.type}</p>
					</div>
				))}
			</div>
			{questions.length > 0 && (
				<div className="pagination">
					<button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
						Previous
					</button>
					<span>
						Page {page} of {totalPages}
					</span>
					<button
						onClick={() => handlePageChange(page + 1)}
						disabled={page === totalPages}
					>
						Next
					</button>
				</div>
			)}
			{selectedQuestion && (
				<div className="modal" onClick={closeModal}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<button className="close-button" onClick={closeModal}>
							&times;
						</button>
						<h3>{selectedQuestion.title}</h3>
						<p>Type: {selectedQuestion.type}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default QuestionsComponent;