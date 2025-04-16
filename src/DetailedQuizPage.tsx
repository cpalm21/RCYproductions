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


  // State for answers (Only 7 open-ended questions)
  const [question2Answer, setQuestion2Answer] = useState<string>(''); // Open-ended
  const [question3Answer, setQuestion3Answer] = useState<string>(''); // Open-ended
  const [question4Answer, setQuestion4Answer] = useState<string>(''); // Open-ended
  const [question5Answer, setQuestion5Answer] = useState<string>(''); // Open-ended
  const [question6Answer, setQuestion6Answer] = useState<string>(''); // Open-ended
  const [question7Answer, setQuestion7Answer] = useState<string>(''); // Open-ended
  const [question8Answer, setQuestion8Answer] = useState<string>(''); // Open-ended

  // Progress state
  const [position, setPosition] = useState<number>(0);

  // Progress tracking for each question
  const [question2Answered, setQuestion2Answered] = useState<boolean>(false);
  const [question3Answered, setQuestion3Answered] = useState<boolean>(false);
  const [question4Answered, setQuestion4Answered] = useState<boolean>(false);
  const [question5Answered, setQuestion5Answered] = useState<boolean>(false);
  const [question6Answered, setQuestion6Answered] = useState<boolean>(false);
  const [question7Answered, setQuestion7Answered] = useState<boolean>(false);
  const [question8Answered, setQuestion8Answered] = useState<boolean>(false);


  // Question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentQuestionIndex === 0) {

      setQuestion2Answer(e.target.value); // Open-ended question
      if (!question2Answered) {
        setPosition(position + 57);
        setQuestion2Answered(true);
      }
    } else if (currentQuestionIndex === 1) {
      setQuestion3Answer(e.target.value); // Open-ended question
      if (!question3Answered) {
        setPosition(position + 57);
        setQuestion3Answered(true);
      }
    } else if (currentQuestionIndex === 2) {
      setQuestion4Answer(e.target.value); // Open-ended question
      if (!question4Answered) {
        setPosition(position + 57);
        setQuestion4Answered(true);
      }
    } else if (currentQuestionIndex === 3) {
      setQuestion5Answer(e.target.value); // Open-ended question
      if (!question5Answered) {
        setPosition(position + 57);
        setQuestion5Answered(true);
      }
    } else if (currentQuestionIndex === 4) {
      setQuestion6Answer(e.target.value); // Open-ended question
      if (!question6Answered) {
        setPosition(position + 57);
        setQuestion6Answered(true);
      }
    } else if (currentQuestionIndex === 5) {
      setQuestion7Answer(e.target.value); // Open-ended question
      if (!question7Answered) {
        setPosition(position + 57);
        setQuestion7Answered(true);
      }
    } else if (currentQuestionIndex === 6) {
      setQuestion8Answer(e.target.value); // Open-ended question
      if (!question8Answered) {
        setPosition(position + 57);
        setQuestion8Answered(true);
      }

    }
  };

  const nextQuestion = () => {

    if (currentQuestionIndex < 7) {
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

          question: "Are there any specific characteristics or aspects a potential career must avoid for you to consider pursuing it?",
          answer: question2Answer,
          type: "open-ended"
        };
      case 1:
        return {
          question: "What skills or qualities do you believe you have acquired? How would you apply it to your future career?",
          answer: question3Answer,

          type: "open-ended"
        };
      case 2:
        return {

          question: "What type of impact do you want to have through your work?",
          answer: question4Answer,
          type: "open-ended"
        };
      case 3:
        return {
          question: "How important is job stability to you? Would you prefer a job with clear progression, or are you more interested in flexibility and change?",
          answer: question5Answer,
          type: "open-ended"
        };
      case 4:
        return {
          question: "What are the things you are most passionate about in life?",
          answer: question6Answer,
          type: "open-ended"
        };
      case 5:
        return {
          question: "Aside from the money you could make, what is it you most seek from your career?",
          answer: question7Answer,
          type: "open-ended"
        };
      case 6:
        return {
          question: "How do you define success in your career, and what kind of work would make you feel fulfilled?",
          answer: question8Answer,
          type: "open-ended"
        };
      default:
        return { question: "", answer: '', type: "open-ended" };
    }
  };

  const { question, answer, type } = getCurrentQuestionData();


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

        ) : null}


        <div className="navigation">
          <Button onClick={prevQuestion} disabled={currentQuestionIndex === 0}>
            Previous Question
          </Button>

          {currentQuestionIndex < 6 ? (

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
