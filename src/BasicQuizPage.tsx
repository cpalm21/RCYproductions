import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './BasicQuizPage.css'; // Import the CSS file



interface positionProps{
  setPosition: (newPosition: number) => void;
  position: number;
}

//Code for the progress bar 
function MoveableBox({ position }: positionProps): React.JSX.Element {
  return (
      <div 
          
          data-testid="moveable-box-container"
          
          style={{
              width: "400px", // This is the full width of the progress bar (the left side will stay fixed at 0px)
              height: "10px",
              backgroundColor: "lightgray", // Background color for the unfilled part of the bar
              border: "1px solid blue",
              display: "inline-block",
              verticalAlign: "bottom",
              
          }}
      >
          <div
              data-testid="moveable-box"
              style={{
                  width: position + "px", // This will only control the right side
                  height: "100%", // Full height of the progress bar
                  backgroundColor: "lightblue", // Color for the filled part of the progress bar
              }}
          ></div>
      </div>
  );
}


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


  //status bar 
  const [position, setPosition] = useState<number>(0);
  const [questionAnswered, setQuestionAnswered] = useState<boolean>(false)
  const [question2Answered, setQuestion2Answered] = useState<boolean>(false)
  const [question3Answered, setQuestion3Answered] = useState<boolean>(false)

  // Add more states for additional questions as needed


  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [position, setPosition] = useState<number>(0);

  const handleAnswerChange = (index: number) => {
    if (currentQuestionIndex === 0) {

      if (question1Answer === null) setPosition(position + 133);
      setQuestion1Answer(index);

        setQuestion1Answer(index);
        //updates progress bar 
        if(!questionAnswered){
          if(position < 267){
            setPosition(133+position);
          }
        }
    
    
    
        setQuestionAnswered(true);

    } else if (currentQuestionIndex === 1) {
      if (question2Answer === null) setPosition(position + 133);
      setQuestion2Answer(index);
      //updates progress bar 
      if(!question2Answered){
        if(position < 267){
          setPosition(133+position);
        }
      }
  
  
  
      setQuestion2Answered(true);
      
    } else if (currentQuestionIndex === 2) {
      if (question3Answer === null) setPosition(position + 133);
      setQuestion3Answer(index);
      //updates progress bar 
      if(!question3Answered){
        if(position < 267){
          setPosition(133+position);
        }
      }
  
  
  
      setQuestion3Answered(true);
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
        <div>
          Progress Bar   
        <MoveableBox
              position={position}
              setPosition={setPosition}
          ></MoveableBox>
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




export default BasicQuizPage;
