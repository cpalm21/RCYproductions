import React, { useState } from 'react';
import "./Homepage";
import "./BasicQuizPage";
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './DetailedQuizPage.css';


export function DetailedQuizPage(): React.JSX.Element {

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const goToBasic = () => {
    navigate('/BasicQuizPage');
  };


  // State for answers
  const [question1Answer, setQuestion1Answer] = useState<string>('');
  const [question2Answer, setQuestion2Answer] = useState<string>('');
  const [question3Answer, setQuestion3Answer] = useState<string>('');
  const [question4Answer, setQuestion4Answer] = useState<string>('');
  const [question5Answer, setQuestion5Answer] = useState<string>('');
  const [question6Answer, setQuestion6Answer] = useState<string>('');
  const [question7Answer, setQuestion7Answer] = useState<string>('');

  // Progress state
  const [position, setPosition] = useState<number>(0);

  // Progress tracking for each question
  const [question1Answered, setQuestion1Answered] = useState<boolean>(false);
  const [question2Answered, setQuestion2Answered] = useState<boolean>(false);
  const [question3Answered, setQuestion3Answered] = useState<boolean>(false);
  const [question4Answered, setQuestion4Answered] = useState<boolean>(false);
  const [question5Answered, setQuestion5Answered] = useState<boolean>(false);
  const [question6Answered, setQuestion6Answered] = useState<boolean>(false);
  const [question7Answered, setQuestion7Answered] = useState<boolean>(false);


  // Question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  // Flag for whether to display finished notification
  const [notify, setNotify] = useState<boolean>(false);

  const notifyIfDone = () => {
    if(question1Answered &&
       question2Answered &&
        question3Answered &&
         question4Answered &&
          question5Answered &&
           question6Answered &&
            question7Answered) {
              setNotify(true);
    } else {
      setNotify(false);
    }
  }

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (currentQuestionIndex === 0) {

      setQuestion1Answer(e.target.value);

      if (!question1Answered && question1Answer.length === 3) {
        setPosition(position + 57);
        setQuestion1Answered(true);
      } else if (question1Answered && question1Answer.length < 3){
        setPosition(position - 57);
        setQuestion1Answered(false);
      }

    } else if (currentQuestionIndex === 1) {

      setQuestion2Answer(e.target.value);

      if (!question2Answered && question2Answer.length === 3) {
        setPosition(position + 57);
        setQuestion2Answered(true);
      } else if (question2Answered && question2Answer.length < 3){
        setPosition(position - 57);
        setQuestion2Answered(false);
      }

    } else if (currentQuestionIndex === 2) {

      setQuestion3Answer(e.target.value);

      if (!question3Answered && question3Answer.length === 3) {
        setPosition(position + 57);
        setQuestion3Answered(true);
      } else if (question3Answered && question3Answer.length < 3){
        setPosition(position - 57);
        setQuestion3Answered(false);
      }

    } else if (currentQuestionIndex === 3) {

      setQuestion4Answer(e.target.value);

      if (!question4Answered && question4Answer.length === 3) {
        setPosition(position + 57);
        setQuestion4Answered(true);
      } else if (question4Answered && question4Answer.length < 3){
        setPosition(position - 57);
        setQuestion4Answered(false);
      }

    } else if (currentQuestionIndex === 4) {

      setQuestion5Answer(e.target.value);

      if (!question5Answered && question5Answer.length === 3) {
        setPosition(position + 57);
        setQuestion5Answered(true);
      } else if (question5Answered && question5Answer.length < 3){
        setPosition(position - 57);
        setQuestion5Answered(false);
      }

    } else if (currentQuestionIndex === 5) {

      setQuestion6Answer(e.target.value);

      if (!question6Answered && question6Answer.length === 3) {
        setPosition(position + 57);
        setQuestion6Answered(true);
      } else if (question6Answered && question6Answer.length < 3){
        setPosition(position - 57);
        setQuestion6Answered(false);
      }

    } else if (currentQuestionIndex === 6) {

      setQuestion7Answer(e.target.value);

      if (!question7Answered && question7Answer.length === 3) {
        setPosition(position + 57);
        setQuestion7Answered(true);
      } else if (question7Answered && question7Answer.length < 3){
        setPosition(position - 57);
        setQuestion7Answered(false);
      }

    }

    notifyIfDone();

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
          answer: question1Answer
        };
      case 1:
        return {
          question: "What skills or qualities do you believe you have acquired? How would you apply it to your future career?",
          answer: question2Answer
        };
      case 2:
        return {
          question: "What type of impact do you want to have through your work?",
          answer: question3Answer
        };
      case 3:
        return {
          question: "How important is job stability to you? Would you prefer a job with clear progression, or are you more interested in flexibility and change?",
          answer: question4Answer
        };
      case 4:
        return {
          question: "What are the things you are most passionate about in life?",
          answer: question5Answer
        };
      case 5:
        return {
          question: "Aside from the money you could make, what is it you most seek from your career?",
          answer: question6Answer
        };
      case 6:
        return {
          question: "How do you define success in your career, and what kind of work would make you feel fulfilled?",
          answer: question7Answer
        };
      default:
        return { question: "", answer: ''};
    }
  };

  const { question, answer} = getCurrentQuestionData();


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
        <Form.Label>Please input at least 3 characters.</Form.Label>
        <Form.Control
          type="text"
          value={answer}
          onChange={handleAnswerChange}
          className="answer-input"
        />

        {notify && <Form.Label>You've completed all the questions for the Detailed Assessment! ✔️</Form.Label>}

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
