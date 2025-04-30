import React, { useState} from 'react';
import "./Homepage";
import "./BasicQuizPage";
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './DetailedQuizPage.css';

import axios from 'axios';



export function DetailedQuizPage(): React.JSX.Element {

  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const goToBasic = () => {
    navigate('/BasicQuizPage');
  };

  //state for chat gpt 
  const [careerRecommendation, setCareerRecommendation] = useState<string | null>(null);
  const [loadingRecommendation, setLoadingRecommendation] = useState<boolean>(false);

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


  //function for ChatGPT
  const getCareerRecommendation = async () => {
    setLoadingRecommendation(true);
  
    const prompt = `
  Based on the following responses from a career survey, suggest a career path that aligns with the user's values, preferences, and passions.
  
  1. ${question1Answer}
  2. ${question2Answer}
  3. ${question3Answer}
  4. ${question4Answer}
  5. ${question5Answer}
  6. ${question6Answer}
  7. ${question7Answer}
  
  Provide the recommendation in 2-3 sentences.
  Also, at the end of the response, can you say "have a nice day!"
  `;
  
    try {
      const apiKey = JSON.parse(localStorage.getItem("MYKEY") || '"')
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful career advisor.' },
            { role: 'user', content: prompt }
          ],
          max_tokens: 150
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );
  
      const recommendation = response.data.choices[0].message.content.trim();
      setCareerRecommendation(recommendation);
    } catch (error) {
      console.error('Failed to fetch recommendation:', error);
      setCareerRecommendation('Sorry, there was an error getting a recommendation.');
    } finally {
      setLoadingRecommendation(false);
    }
  };


  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // For Chris and Yaz:
    // Makes a copy of the states that track whether a question has been answered or not
    // We're going to use this for the if statements in the notifyIfDone function
    // Because previously we were using the boolean states directly, only problem is those state are NOT updated immediately
    // They're updated only after the component as a whole has been re-rendered
    const answeredArr: boolean[] = [question1Answered,question2Answered,
      question3Answered,question4Answered,
      question5Answered,question6Answered,
      question7Answered];

    const stringAns: string = e.target.value;

    if (currentQuestionIndex === 0) {

      setQuestion1Answer(stringAns);

      if (!question1Answered && stringAns.length === 3) {
        setPosition(position + 57);
        setQuestion1Answered(true);
        answeredArr[currentQuestionIndex] = true;
      } else if (question1Answered && stringAns.length < 3){
        setPosition(position - 57);
        setQuestion1Answered(false);
        answeredArr[currentQuestionIndex] = false;
      }

    } else if (currentQuestionIndex === 1) {

      setQuestion2Answer(stringAns);

      if (!question2Answered && stringAns.length === 3) {
        setPosition(position + 57);
        setQuestion2Answered(true);
        answeredArr[currentQuestionIndex] = true;
      } else if (question2Answered && stringAns.length < 3){
        setPosition(position - 57);
        setQuestion2Answered(false);
        answeredArr[currentQuestionIndex] = false;
      }

    } else if (currentQuestionIndex === 2) {

      setQuestion3Answer(stringAns);

      if (!question3Answered && stringAns.length === 3) {
        setPosition(position + 57);
        setQuestion3Answered(true);
        answeredArr[currentQuestionIndex] = true;
      } else if (question3Answered && stringAns.length < 3){
        setPosition(position - 57);
        setQuestion3Answered(false);
        answeredArr[currentQuestionIndex] = false;
      }

    } else if (currentQuestionIndex === 3) {

      setQuestion4Answer(stringAns);

      if (!question4Answered && stringAns.length === 3) {
        setPosition(position + 57);
        setQuestion4Answered(true);
        answeredArr[currentQuestionIndex] = true;
      } else if (question4Answered && stringAns.length < 3){
        setPosition(position - 57);
        setQuestion4Answered(false);
        answeredArr[currentQuestionIndex] = false;
      }

    } else if (currentQuestionIndex === 4) {

      setQuestion5Answer(stringAns);

      if (!question5Answered && stringAns.length === 3) {
        setPosition(position + 57);
        setQuestion5Answered(true);
        answeredArr[currentQuestionIndex] = true;
      } else if (question5Answered && stringAns.length < 3){
        setPosition(position - 57);
        setQuestion5Answered(false);
        answeredArr[currentQuestionIndex] = false;
      }

    } else if (currentQuestionIndex === 5) {

      setQuestion6Answer(stringAns);

      if (!question6Answered && stringAns.length === 3) {
        setPosition(position + 57);
        setQuestion6Answered(true);
        answeredArr[currentQuestionIndex] = true;
      } else if (question6Answered && stringAns.length < 3){
        setPosition(position - 57);
        setQuestion6Answered(false);
        answeredArr[currentQuestionIndex] = false;
      }

    } else if (currentQuestionIndex === 6) {

      setQuestion7Answer(stringAns);

      if (!question7Answered && stringAns.length === 3) {
        setPosition(position + 57);
        setQuestion7Answered(true);
        answeredArr[currentQuestionIndex] = true;
      } else if (question7Answered && stringAns.length < 3){
        setPosition(position - 57);
        setQuestion7Answered(false);
        answeredArr[currentQuestionIndex] = false;
      }

    }

    notifyIfDone(answeredArr);

  };

  const notifyIfDone = (answeredArr: boolean[]) => {
    if(answeredArr[0] &&
      answeredArr[1] &&
      answeredArr[2] &&
      answeredArr[3] &&
      answeredArr[4] &&
      answeredArr[5] &&
      answeredArr[6] ) {
        setNotify(true);
    } else {
      setNotify(false);
    }
  }

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
            ''
          )}
        </div>

        {/*chatGPT button*/}

          {notify && (
          <div style={{ marginTop: '1rem' }}>
          <Button onClick={getCareerRecommendation} disabled={loadingRecommendation}>
          {loadingRecommendation ? 'Generating...' : 'Get Career Recommendation'}
          </Button>
          {careerRecommendation && (
          <div style={{ marginTop: '1rem', background: '#f8f9fa', padding: '10px', borderRadius: '5px' }}>
          <strong>Career Recommendation:</strong>
          <p>{careerRecommendation}</p>
          </div>
          )}

          </div>
          )}


        {/*end chatGPT button*/}

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
