
import React, {useEffect, useState} from 'react';
import Apprentice_TandemFor400_Data from '../components/data/Apprentice_TandemFor400_Data.json'
import '../App.css'


// Fisher-Yates shuffle algorithm
function shuffle(a) {
	let j, x, i;
	for (i = a.length -1; i > 0; i --){
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x
	}
	return a
}

let formattedData = []
for (let i = 0; i < Apprentice_TandemFor400_Data.length; i++ ){

	let temp = shuffle(Apprentice_TandemFor400_Data[i].incorrect.concat(Apprentice_TandemFor400_Data[i].correct))
	formattedData.push(temp)
}


export default function QuizViewPage() {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect, choice) => {
		if (isCorrect === choice) {
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
							<button onClick={() => handleAnswerOptionClick(answerOption, Apprentice_TandemFor400_Data[currentQuestion].correct)}>{answerOption}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
