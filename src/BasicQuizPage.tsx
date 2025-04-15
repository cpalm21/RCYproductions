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

  // State for answers
  const [question1Answer, setQuestion1Answer] = useState<number | null>(null);
  const [question2Answer, setQuestion2Answer] = useState<number | null>(null);
  const [question3Answer, setQuestion3Answer] = useState<number | null>(null);

  // Progress state
  const [position, setPosition] = useState<number>(0);
  const [questionAnswered, setQuestionAnswered] = useState<boolean>(false);
  const [question2Answered, setQuestion2Answered] = useState<boolean>(false);
  const [question3Answered, setQuestion3Answered] = useState<boolean>(false);

  // Question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerChange = (index: number) => {
    if (currentQuestionIndex === 0) {
      setQuestion1Answer(index);
      if (!questionAnswered) {
        setPosition(position + 133);
        setQuestionAnswered(true);
      }
    } else if (currentQuestionIndex === 1) {
      setQuestion2Answer(index);
      if (!question2Answered) {
        setPosition(position + 133);
        setQuestion2Answered(true);
      }
    } else if (currentQuestionIndex === 2) {
      setQuestion3Answer(index);
      if (!question3Answered) {
        setPosition(position + 133);
        setQuestion3Answered(true);
      }
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < 2) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
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
          question: "What is your major?",
          answers: ["CS", "Finance", "Mech", "Chem"],
          selectedAnswer: question1Answer,
        };
      case 1:
        return {
          question: "Do you like this class?",
          answers: ["Yes", "Kind of", "Don't prefer to answer", "No"],
          selectedAnswer: question2Answer,
        };
      case 2:
        return {
          question: "How are you today?",
          answers: ["Amazing", "Good", "Could be better", "Surviving"],
          selectedAnswer: question3Answer,
        };
      default:
        return { question: "", answers: [], selectedAnswer: null };
    }
  };

  const { question, answers, selectedAnswer } = getCurrentQuestionData();

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <Button onClick={goToHome}>Return Home</Button>
        <Button onClick={goToDetailed}>Switch to Detailed Quiz</Button>
      </div>

      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <h3 className="title">This is the Basic Quiz</h3>
          <p className="description">
            The Basic Quiz is a short assessment, designed to give users a broad array of career recommendations.
            This is ideal for users who are curious but aren't seeking specific career recommendations.
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
            <div className="moveable-box" style={{ width:  position + "px"}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicQuizPage;
