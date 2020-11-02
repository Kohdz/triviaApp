
import React, { useState } from 'react';
import Apprentice_TandemFor400_Data from '../components/data/Apprentice_TandemFor400_Data.json'
import '../App.css'
export default function QuizViewPage() {

	let formattedData = []
	const questionLengs = 0
	for (let i = 0; i < Apprentice_TandemFor400_Data.length; i++ ){


		// console.log(Apprentice_TandemFor400_Data[i].question)
		// let correct = Apprentice_TandemFor400_Data[i].correct
		// Apprentice_TandemFor400_Data[i].incorrect.push(Apprentice_TandemFor400_Data[i].correct)
		// console.log(Apprentice_TandemFor400_Data[i].incorrect)
		// console.log(Apprentice_TandemFor400_Data[i].correct)
		// formattedData.push(Apprentice_TandemFor400_Data[i].correct)
		// formattedData.push(Apprentice_TandemFor400_Data[i].incorrect)
		let temp = Apprentice_TandemFor400_Data[i].incorrect.concat(Apprentice_TandemFor400_Data[i].correct)
		formattedData.push(temp)
		// for (let j = 0; j < Apprentice_TandemFor400_Data[i].incorrect.lenght; j++){
		// 	formattedData.push(Apprentice_TandemFor400_Data[i].incorrect[j])
		// }
	}
	console.log(formattedData)



	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < Apprentice_TandemFor400_Data.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {Apprentice_TandemFor400_Data.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{Apprentice_TandemFor400_Data.length}
						</div>
						<div className='question-text'>{Apprentice_TandemFor400_Data[currentQuestion].question}</div>
					</div>
					<div className='answer-section'>
						{formattedData[currentQuestion].map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption)}>{answerOption}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
