import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './BasicQuizPage.css';

export function BasicQuizPage(): React.JSX.Element {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const goToDetailed = () => {
    navigate('/DetailedQuizPage');
  };

  // State for answers (1 answer per question, total of 10 questions)
  const [question1Answer, setQuestion1Answer] = useState<number | null>(null);
  const [question2Answer, setQuestion2Answer] = useState<number | null>(null);
  const [question3Answer, setQuestion3Answer] = useState<number | null>(null);
  const [question4Answer, setQuestion4Answer] = useState<number | null>(null);
  const [question5Answer, setQuestion5Answer] = useState<number | null>(null);
  const [question6Answer, setQuestion6Answer] = useState<number | null>(null);
  const [question7Answer, setQuestion7Answer] = useState<number | null>(null);
  const [question8Answer, setQuestion8Answer] = useState<number | null>(null);
  const [question9Answer, setQuestion9Answer] = useState<number | null>(null);
  const [question10Answer, setQuestion10Answer] = useState<number | null>(null);

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
  const [question8Answered, setQuestion8Answered] = useState<boolean>(false);
  const [question9Answered, setQuestion9Answered] = useState<boolean>(false);
  const [question10Answered, setQuestion10Answered] = useState<boolean>(false);

  // Question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    // Flag for whether to display finished notification
    const [notify, setNotify] = useState<boolean>(false);

  const notifyIfDone = () => {
    if(question1Answered &&
      question2Answered &&
      question3Answered &&
      question4Answered &&
      question5Answered &&
      question6Answered &&
      question7Answered && 
      question8Answered && 
      question9Answered && 
      question10Answered) {
        setNotify(true);
    } else {
      setNotify(false);
    }
  }

  const handleAnswerChange = (index: number) => {
    if (currentQuestionIndex === 0) {
      setQuestion1Answer(index);
      if (!question1Answered) {
        setPosition(position + 40);
        setQuestion1Answered(true);
      }
    } else if (currentQuestionIndex === 1) {
      setQuestion2Answer(index);
      if (!question2Answered) {
        setPosition(position + 40);
        setQuestion2Answered(true);
      }
    } else if (currentQuestionIndex === 2) {
      setQuestion3Answer(index);
      if (!question3Answered) {
        setPosition(position + 40);
        setQuestion3Answered(true);
      }
    } else if (currentQuestionIndex === 3) {
      setQuestion4Answer(index);
      if (!question4Answered) {
        setPosition(position + 40);
        setQuestion4Answered(true);
      }
    } else if (currentQuestionIndex === 4) {
      setQuestion5Answer(index);
      if (!question5Answered) {
        setPosition(position + 40);
        setQuestion5Answered(true);
      }
    } else if (currentQuestionIndex === 5) {
      setQuestion6Answer(index);
      if (!question6Answered) {
        setPosition(position + 40);
        setQuestion6Answered(true);
      }
    } else if (currentQuestionIndex === 6) {
      setQuestion7Answer(index);
      if (!question7Answered) {
        setPosition(position + 40);
        setQuestion7Answered(true);
      }
    } else if (currentQuestionIndex === 7) {
      setQuestion8Answer(index);
      if (!question8Answered) {
        setPosition(position + 40);
        setQuestion8Answered(true);
      }
    } else if (currentQuestionIndex === 8) {
      setQuestion9Answer(index);
      if (!question9Answered) {
        setPosition(position + 40);
        setQuestion9Answered(true);
      }
    } else if (currentQuestionIndex === 9) {
      setQuestion10Answer(index);
      if (!question10Answered) {
        setPosition(position + 40);
        setQuestion10Answered(true);
      }
    }

    notifyIfDone();

  };

  const nextQuestion = () => {
    if (currentQuestionIndex < 9) {
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
          question: "Which of the following best describes your educational background and future aspirations?",
          answers: [
            "I have at least a bachelor's degree and am open to pursuing higher education to achieve my ideal career.",
            "I have at least a bachelor's degree, but I am not interested in pursuing further education.",
            "I do not have a bachelor's degree but am open to pursuing higher education to get into my ideal career.",
            "I do not have a bachelor's degree and am not interested in pursuing further education."
          ],
          selectedAnswer: question1Answer,
        };
      case 1:
        return {
          question: "Which of the following best describes your preferred work environment and flexibility for your future career?",
          answers: [
            "I prefer a hybrid or remote work environment and my future career must offer this flexibility.",
            "I prefer a hybrid or remote work environment, but I am open to other work setups if necessary.",
            "I prefer working in an office environment, but I would consider hybrid or remote work options.",
            "I prefer working in an office or fieldwork environment and am not interested in hybrid or remote work."
          ],
          selectedAnswer: question2Answer,
        };
      case 2:
        return {
          question: "How important is travel as part of your future job?",
          answers: [
            "I would love to travel as part of my job and see it as an important aspect of my career.",
            "I am open to occasional travel for work, but it's not a priority.",
            "I prefer to work in a job that doesn't require travel.",
            "I am not interested in travel for work at all."
          ],
          selectedAnswer: question3Answer,
        };
      case 3:
        return {
          question: "How would you prioritize work-life balance in your future career?",
          answers: [
            "I would accept a lower-paying job if it offered me more free time away from work.",
            "I would prefer a higher-paying job, even if it meant less free time.",
            "I would balance both salary and free time equally when considering a job.",
            "I would not prioritize free time over salary in my career decisions."
          ],
          selectedAnswer: question4Answer,
        };
      case 4:
        return {
          question: "Do you like working in teams?",
          answers: [
            "I enjoy working in teams and collaborating with others.",
            "I prefer working alone and having independent control over my tasks.",
            "I like a mix of both team work and solo work, depending on the situation.",
            "I am flexible and can adapt to either team-based or solo work environments."
          ],
          selectedAnswer: question5Answer,
        };
      case 5:
        return {
          question: "What is your favorite subject in school?",
          answers: [
            "Math.",
            "Science.",
            "Reading/Writing.",
            "P.E. (Physical Education)."
          ],
          selectedAnswer: question6Answer,
        };
      case 6:
        return {
          question: "How many books have you read in the past year?",
          answers: [
            "0-2.",
            "2-4.",
            "4-6.",
            "More than 6."
          ],
          selectedAnswer: question7Answer,
        };
      case 7:
        return {
          question: "What is your preferred method of problem-solving?",
          answers: [
            "Analytical (based on logic, data, and systematic thinking).",
            "Creative (thinking outside the box and finding innovative solutions).",
            "Collaborative (working with others to find solutions).",
            "Hands-on (learning by doing and trying out solutions practically)."
          ],
          selectedAnswer: question8Answer,
        };
      case 8:
        return {
          question: "How interested are you in management and overseeing daily operations in your future career?",
          answers: [
            "I would be very interested in managing people and planning day-to-day operations.",
            "I am somewhat interested in management and operations but prefer focusing on other areas.",
            "I prefer to avoid managing people and would rather focus on specialized tasks.",
            "I have no interest in management and prefer independent, non-managerial roles."
          ],
          selectedAnswer: question9Answer,
        };
      case 9:
        return {
          question: "How passionate are you about starting your own business?",
          answers: [
            "I am very passionate about starting my own business and see it as my future goal.",
            "I am somewhat interested in starting my own business but may also consider other career paths.",
            "I am not particularly interested in starting my own business but would support others who do.",
            "I have no interest in starting my own business and prefer working for established companies."
          ],
          selectedAnswer: question10Answer,
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

        {notify && <Form.Label>You've completed all the questions for the Basic Assessment! ✔️</Form.Label>}

        <div className="navigation">
          <Button onClick={prevQuestion} disabled={currentQuestionIndex === 0}>
            Previous Question
          </Button>
          {currentQuestionIndex < 9 ? (
            <Button onClick={nextQuestion}>Next Question</Button>
          ) : (
            <Button disabled>Quiz Complete</Button>
          )}
        </div>

        {/* Progress Bar */}
        <div className="progress-row">
          <span className="progress-label">Progress:</span>
          <div className="moveable-box-container">

            <div className="moveable-box" style={{ width:  position + "px" }}></div>

          </div>
        </div>
      </div>
    </div>
  );
}
