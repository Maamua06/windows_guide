import React, { useState } from 'react';

const Quiz = () => {
    const questions = [
        {
          questionText: 'What is the capital of France?',
          answerOptions: [
            { answerText: 'Paris', isCorrect: true },
            { answerText: 'Berlin', isCorrect: false },
            { answerText: 'London', isCorrect: false },
            { answerText: 'Madrid', isCorrect: false },
          ],
        },
        {
          questionText: 'Which programming language is this quiz written in?',
          answerOptions: [
            { answerText: 'JavaScript', isCorrect: true },
            { answerText: 'Python', isCorrect: false },
            { answerText: 'Java', isCorrect: false },
            { answerText: 'C++', isCorrect: false },
          ],
        },
        {
          questionText: 'What is the capital of Japan?',
          answerOptions: [
            { answerText: 'Tokyo', isCorrect: true },
            { answerText: 'Seoul', isCorrect: false },
            { answerText: 'Beijing', isCorrect: false },
            { answerText: 'Bangkok', isCorrect: false },
          ],
        },
        {
          questionText: 'Which planet is known as the Red Planet?',
          answerOptions: [
            { answerText: 'Mars', isCorrect: true },
            { answerText: 'Jupiter', isCorrect: false },
            { answerText: 'Venus', isCorrect: false },
            { answerText: 'Saturn', isCorrect: false },
          ],
        },
        {
          questionText: 'In which year did World War II end?',
          answerOptions: [
            { answerText: '1945', isCorrect: true },
            { answerText: '1939', isCorrect: false },
            { answerText: '1950', isCorrect: false },
            { answerText: '1940', isCorrect: false },
          ],
        },
        
      ];
      

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div>
      {showScore ? (
        <div>
          <h2>Your Score: {score}/{questions.length}</h2>
          <button onClick={resetQuiz}>Try Again</button>
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].questionText}</p>
          <div>
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option.isCorrect)}
              >
                {option.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
