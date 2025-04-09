import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './BasicQuizPage.css'; // Import the CSS file

export function BasicQuizPage(): React.JSX.Element {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const goToDetailed = () => {
    navigate('/DetailedQuizPage');
  };

  // Separate states for each question and its answers
  const [question1Answer, setQuestion1Answer] = useState<number | null>(null);
  const [question2Answer, setQuestion2Answer] = useState<number | null>(null);
  const [question3Answer, setQuestion3Answer] = useState<number | null>(null);
  // Add more states for additional questions as needed

  // Store the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerChange = (index: number) => {
    if (currentQuestionIndex === 0) {
      setQuestion1Answer(index);
    } else if (currentQuestionIndex === 1) {
      setQuestion2Answer(index);
    } else if (currentQuestionIndex === 2) {
      setQuestion3Answer(index);
    }
    // You can add additional conditions for more questions here
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < 2) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Adjust for more questions
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1); // Adjust for more questions
    }
  };

  // Function to get the current question and answers
  const getCurrentQuestionData = () => {
    switch (currentQuestionIndex) {
      case 0:
        return {
          question: "What is the capital of France?",
          answers: ["Berlin", "Madrid", "Paris", "Rome"],
          selectedAnswer: question1Answer,
        };
      case 1:
        return {
          question: "What is 2 + 2?",
          answers: ["3", "4", "5", "6"],
          selectedAnswer: question2Answer,
        };
      case 2:
        return {
          question: "What is the largest ocean on Earth?",
          answers: ["Atlantic", "Indian", "Arctic", "Pacific"],
          selectedAnswer: question3Answer,
        };
      default:
        return { question: "", answers: [], selectedAnswer: null };
    }
  };

  const { question, answers, selectedAnswer } = getCurrentQuestionData();

  return (
    <div>
      <header className="header">
        <Button onClick={goToHome}>Return Home</Button>
        <Button onClick={goToDetailed}>Switch to Detailed Quiz</Button>
        <h3 className="title">This is the Basic Quiz</h3>
        <p className="description">The Basic Quiz is a short assessment, designed to give users a broad array of career recommendations. This is ideal for users who are curious but aren't seeking specific career recommendations.</p>
      </header>

      <div className="quiz-container">
        <h4 className="question-label">Question:</h4>
        <Form.Control 
          type="text" 
          value={question} 
          readOnly 
          className="question-input" 
        />

        <h4 className="answers-label">Answers:</h4>
        {answers.map((answer, index) => (
          <div key={index} className="answer-option">
            <Form.Check 
              type="radio" 
              name="answer" 
              label={answer} 
              checked={selectedAnswer === index} 
              onChange={() => handleAnswerChange(index)} 
              className="answer-radio"
            />
          </div>
        ))}

        <div className="navigation">
          <Button 
            onClick={prevQuestion} 
            disabled={currentQuestionIndex === 0}
          >
            Previous Question
          </Button>
          
          {currentQuestionIndex < 2 ? (
            <Button onClick={nextQuestion}>Next Question</Button>
          ) : (
            <Button disabled>Quiz Complete</Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default BasicQuizPage;
