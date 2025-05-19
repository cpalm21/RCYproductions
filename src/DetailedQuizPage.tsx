import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { CareerResults } from './Career';
import './DetailedQuizPage.css';

export function DetailedQuizPage(): React.JSX.Element {

  const navigate = useNavigate();
  const goToHome = () => navigate('/');
  const goToBasic = () => navigate('/BasicQuizPage');

  // State for answers
  const [answers, setAnswers] = useState<string[]>(['','','','','','','']);

  // Progress state
  const [position, setPosition] = useState<number>(0);

  // Progress tracking for each question
  const [questionsAnswered, setQuestionsAnswered] = useState<boolean[]>([false,false,false,false,false,false,false]);

  // Question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  // Flag for whether to display finished notification
  const [notify, setNotify] = useState<boolean>(false);

  const indexes: number[] = [0,1,2,3,4,5,6];

    const prompt: string = `Based on the following responses, suggest the top 3 best-fit careers. Return the response as a JSON array of objects with fields: title, salary, match: (percentage), summary: make it detailed and around 5-6 sentences.

1. ${answers[0]}
2. ${answers[1]}
3. ${answers[2]}
4. ${answers[3]}
5. ${answers[4]}
6. ${answers[5]}
7. ${answers[6]}`;

    // Makes a copy of the states that track whether a question has been answered or not
    // We're going to use this for the if statements in the notifyIfDone function
    // Because previously we were using the boolean states directly, only problem is those state are NOT updated immediately
    // They're updated only after the component as a whole has been re-rendered
    // This corrects for the progress not updating correctly
  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const answeredArr: boolean[] = [...questionsAnswered];
    const currentAnsArr: string[] = [...answers];
    const stringAns: string = e.target.value;
    currentAnsArr[currentQuestionIndex] = stringAns;
    console.log(stringAns);
    console.log(prompt);

    setAnswers(currentAnsArr);

    if (!questionsAnswered[currentQuestionIndex] && stringAns.length >= 25) {
      setPosition(position + 57);
      answeredArr[currentQuestionIndex] = true;
      setQuestionsAnswered(answeredArr);
    } else if (questionsAnswered[currentQuestionIndex] && stringAns.length < 25){
      setPosition(position - 57);
      answeredArr[currentQuestionIndex] = false;
      setQuestionsAnswered(answeredArr);
    }

    notifyIfDone(answeredArr);

  };

  const notifyIfDone = (answeredArr: boolean[]) => {
    if(answeredArr.every((ans: boolean) => ans)) {
        setNotify(true);
    } else {
      setNotify(false);
    }
  }

  const goToQuestion = (ind: number) => setCurrentQuestionIndex(ind);

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
          answer: answers[currentQuestionIndex]
        };
      case 1:
        return {
          question: "What skills or qualities do you believe you have acquired? How would you apply it to your future career?",
          answer: answers[currentQuestionIndex]
        };
      case 2:
        return {
          question: "What type of impact do you want to have through your work?",
          answer: answers[currentQuestionIndex]
        };
      case 3:
        return {
          question: "How important is job stability to you? Would you prefer a job with clear progression, or are you more interested in flexibility and change?",
          answer: answers[currentQuestionIndex]
        };
      case 4:
        return {
          question: "What are the things you are most passionate about in life?",
          answer: answers[currentQuestionIndex]
        };
      case 5:
        return {
          question: "Aside from the money you could make, what is it you most seek from your career?",
          answer: answers[currentQuestionIndex]
        };
      case 6:
        return {
          question: "How do you define success in your career, and what kind of work would make you feel fulfilled?",
          answer: answers[currentQuestionIndex]
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
        <h4 className="question-label">Question {currentQuestionIndex+1}:</h4>
        {/* <Form.Control
          type="text"
          value={question}
          readOnly
          className="question-input"
        /> */}

        <Form.Label className='question-input'>{question}</Form.Label>

        <h4 className="answer-label">Your Answer:</h4>
        <Form.Label>Please input at least 25 characters. Detailed answers will get you more accurate results.</Form.Label>
        <Form.Control as={'textarea'}
          type="text"
          value={answer}
          onChange={handleAnswerChange}
          className="answer-input"
        />

        {notify && <Form.Label>You've completed all the questions for the Detailed Assessment! ✔️</Form.Label>}

        <div style={{display: "flex", justifyContent: "center", gap: "2px"}}>
          {indexes.map((ind: number) =>
            <Button onClick={() => goToQuestion(ind)} key={ind} value={ind}>{ind + 1}</Button>
          )}
        </div>

        <div className="navigation">
          <Button onClick={prevQuestion} disabled={currentQuestionIndex === 0}>
            Previous Question
          </Button>

          {currentQuestionIndex < 6 ? (

            <Button onClick={nextQuestion}>Next Question</Button>
          ) : (
            ''
          )}
        </div>

        {notify && (<CareerResults chatPrompt={prompt} tokens={1000}></CareerResults>)}

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
