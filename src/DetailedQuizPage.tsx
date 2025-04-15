import React, { useState } from 'react';
import "./Homepage";
import "./BasicQuizPage";
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './DetailedQuizPage.css'; // Import the CSS file


export function DetailedQuizPage(): React.JSX.Element {
  
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const goToBasic = () => {
    navigate('/BasicQuizPage');
  };

  // State for answers
  const [question1Answer, setQuestion1Answer] = useState<number | null>(null); // Multiple-choice
  const [question2Answer, setQuestion2Answer] = useState<string>(''); // Open-ended
  const [question3Answer, setQuestion3Answer] = useState<string>(''); // Open-ended

  // Progress state
  const [position, setPosition] = useState<number>(0);

  // Question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentQuestionIndex === 0) {
      setQuestion1Answer(Number(e.target.value)); // For multiple-choice question
    } else if (currentQuestionIndex === 1) {
      setQuestion2Answer(e.target.value); // Open-ended question
    } else if (currentQuestionIndex === 2) {
      setQuestion3Answer(e.target.value); // Open-ended question
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < 2) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setPosition(position + 133);  // Update the position for progress bar
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const getCurrentQuestionData = () => {
    switch (currentQuestionIndex) {
      case 0:
        return {
          question: "How are you today?",
          answer: question1Answer,
          type: "multiple-choice",
          options: ["Amazing", "Good", "Could be better", "Surviving"]
        };
      case 1:
        return {
          question: "Do you like this class?",
          answer: question2Answer,
          type: "open-ended"
        };
      case 2:
        return {
          question: "What is your major?",
          answer: question3Answer,
          type: "open-ended"
        };
      default:
        return { question: "", answer: '', type: "open-ended", options: [] };
    }
  };

  const { question, answer, type, options } = getCurrentQuestionData();

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <Button onClick={goToHome}>Return Home</Button>
        <Button onClick={goToBasic}>Switch to Basic Quiz</Button>
      </div>

      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <h3 className="title">This is the Detailed Quiz</h3>
          <p className="description">
            The Detailed Quiz is a longer assessment, designed to help users focus on specific career recommendations. This is ideal for users who are making serious considerations about their future career.
          </p>
        </div>
      </header>

      {/* Quiz Content */}
      <div className="quiz-container">
        <h4 className="question-label">Question:</h4>
        <Form.Control
          type="text"
          value={question}
          readOnly
          className="question-input"
        />

        <h4 className="answer-label">Your Answer:</h4>
        {type === "open-ended" ? (
          <Form.Control
            type="text"
            value={answer || ""} // Ensure value is always a string
            onChange={handleAnswerChange}
            className="answer-input"
          />
        ) : (
          options && options.length > 0 && (
            <div className="answer-options">
              {options.map((option, index) => (
                <Form.Check
                  key={index}
                  type="radio"
                  name="answer"
                  label={option}
                  value={index.toString()}
                  checked={answer === index}
                  onChange={handleAnswerChange}
                  className="answer-radio"
                />
              ))}
            </div>
          )
        )}

        <div className="navigation">
          <Button onClick={prevQuestion} disabled={currentQuestionIndex === 0}>
            Previous Question
          </Button>
          {currentQuestionIndex < 2 ? (
            <Button onClick={nextQuestion}>Next Question</Button>
          ) : (
            <Button disabled>Quiz Complete</Button>
          )}
        </div>

        {/* Progress Bar */}
        <div className="progress-row">
          <span className="progress-label">Progress:</span>
          <div className="moveable-box-container">
            <div className="moveable-box" style={{ width: `${position}px` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedQuizPage;
