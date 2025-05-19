import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CareerResults } from './Career';
import './BasicQuizPage.css';


export function BasicQuizPage(): React.JSX.Element {

  const navigate = useNavigate();
  const goToHome = () => navigate('/');
  const goToDetailed = () => navigate('/DetailedQuizPage');

  // State for answers
  const [questionAnswers, setAnswers] = useState<(string | null)[]>([null, null, null, null, null, null, null, null, null, null]);

  // Progress state
  const [position, setPosition] = useState<number>(0);

  // State for keeping track of the currect question selected
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Flag for whether to display finished notification
  const [notify, setNotify] = useState<boolean>(false);

  // Progress tracking for each question
  const [answered, setAnswered] = useState<boolean[]>([false,false,false,false,false,false,false,false,false,false]);
  
  const indexes: number[] = [0,1,2,3,4,5,6,7,8,9];

    const prompt: string = `Based on the following responses, suggest the top 3 best-fit careers. Return the response as a JSON array of objects with fields: title, salary, summary, and match (percentage).

1. ${questionAnswers[0]}
2. ${questionAnswers[1]}
3. ${questionAnswers[2]}
4. ${questionAnswers[3]}
5. ${questionAnswers[4]}
6. ${questionAnswers[5]}
7. ${questionAnswers[6]}
8. ${questionAnswers[7]}
9. ${questionAnswers[8]}
10. ${questionAnswers[9]}`;


    // Makes a copy of the states that track whether a question has been answered or not
    // We're going to use this for the if statements in the notifyIfDone function
    // Because previously we were using the boolean states directly, only problem is those state are NOT updated immediately
    // They're updated only after the component as a whole has been re-rendered
    // This corrects for the progress not updating correctly
  const handleAnswerChange = (index: number) => {
    const answers: string[] = questions[currentQuestionIndex].answers;
    if (!answered[currentQuestionIndex]) {
      const updated: boolean[] = [...answered];
      updated[currentQuestionIndex] = true;
      setAnswered(updated);
      setPosition(position + 40);
      notifyIfDone(updated);
    }
    
    const currentAnswerArr: (string | null)[] = [...questionAnswers];
    currentAnswerArr[currentQuestionIndex] = answers[index];
    setAnswers(currentAnswerArr);
  };

  const notifyIfDone = (arr: boolean[]) => {
    if (arr.every((v: boolean) => v)) setNotify(true);
  };

  const goToQuestion = (ind: number) => setCurrentQuestionIndex(ind);
  const nextQuestion = () => { if (currentQuestionIndex < 9) setCurrentQuestionIndex(currentQuestionIndex + 1); };
  const prevQuestion = () => { if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1); };

  const questions = [
    {
      question: "Which of the following best describes your educational background and future aspirations?",
      answers: [
        "I have at least a bachelor's degree and am open to pursuing higher education to achieve my ideal career.",
        "I have at least a bachelor's degree, but I am not interested in pursuing further education.",
        "I do not have a bachelor's degree but am open to pursuing higher education to get into my ideal career.",
        "I do not have a bachelor's degree and am not interested in pursuing further education."
      ], selectedAnswer: questionAnswers[0]
    },
    {
      question: "Which of the following best describes your preferred work environment and flexibility for your future career?",
      answers: [
        "I prefer a hybrid or remote work environment and my future career must offer this flexibility.",
        "I prefer a hybrid or remote work environment, but I am open to other work setups if necessary.",
        "I prefer working in an office environment, but I would consider hybrid or remote work options.",
        "I prefer working in an office or fieldwork environment and am not interested in hybrid or remote work."
      ], selectedAnswer: questionAnswers[1]
    },
    {
      question: "How important is travel as part of your future job?",
      answers: [
        "I would love to travel as part of my job and see it as an important aspect of my career.",
        "I am open to occasional travel for work, but it's not a priority.",
        "I prefer to work in a job that doesn't require travel.",
        "I am not interested in travel for work at all."
      ], selectedAnswer: questionAnswers[2]
    },
    {
      question: "How would you prioritize work-life balance in your future career?",
      answers: [
        "I would accept a lower-paying job if it offered me more free time away from work.",
        "I would prefer a higher-paying job, even if it meant less free time.",
        "I would balance both salary and free time equally when considering a job.",
        "I would not prioritize free time over salary in my career decisions."
      ], selectedAnswer: questionAnswers[3]
    },
    {
      question: "Do you like working in teams?",
      answers: [
        "I enjoy working in teams and collaborating with others.",
        "I prefer working alone and having independent control over my tasks.",
        "I like a mix of both team work and solo work, depending on the situation.",
        "I am flexible and can adapt to either team-based or solo work environments."
      ], selectedAnswer: questionAnswers[4]
    },
    {
      question: "What is your favorite subject in school?",
      answers: ["Math.", "Science.", "Reading/Writing.", "P.E. (Physical Education)."],
      selectedAnswer: questionAnswers[5]
    },
    {
      question: "How many books have you read in the past year?",
      answers: ["0-2.", "2-4.", "4-6.", "More than 6."],
      selectedAnswer: questionAnswers[6]
    },
    {
      question: "What is your preferred method of problem-solving?",
      answers: [
        "Analytical (based on logic, data, and systematic thinking).",
        "Creative (thinking outside the box and finding innovative solutions).",
        "Collaborative (working with others to find solutions).",
        "Hands-on (learning by doing and trying out solutions practically)."
      ], selectedAnswer: questionAnswers[7]
    },
    {
      question: "How interested are you in management and overseeing daily operations in your future career?",
      answers: [
        "I would be very interested in managing people and planning day-to-day operations.",
        "I am somewhat interested in management and operations but prefer focusing on other areas.",
        "I prefer to avoid managing people and would rather focus on specialized tasks.",
        "I have no interest in management and prefer independent, non-managerial roles."
      ], selectedAnswer: questionAnswers[8]
    },
    {
      question: "How passionate are you about starting your own business?",
      answers: [
        "I am very passionate about starting my own business and see it as my future goal.",
        "I am somewhat interested in starting my own business but may also consider other career paths.",
        "I am not particularly interested in starting my own business but would support others who do.",
        "I have no interest in starting my own business and prefer working for established companies."
      ], selectedAnswer: questionAnswers[9]
    }
  ];

  const { question, answers, selectedAnswer } = questions[currentQuestionIndex];

  return (
    <div>
      <div className="top-bar">
        <Button onClick={goToHome}>Return Home</Button>
        <Button onClick={goToDetailed}>Switch to Detailed Quiz</Button>
      </div>
      <header className="header">
        <div className="header-content">
          <h3 className="title">This is the Basic Quiz</h3>
          <p className="description">The Basic Quiz is a short assessment, designed to give users a broad array of career recommendations.</p>
        </div>
      </header>
      <div className="quiz-container">
        <h4 className="question-label">Question {currentQuestionIndex+1}:</h4>

        <Form.Label className='question-input'>{question}</Form.Label>
        <h4 className="answers-label">Answers:</h4>

        {answers.map((answer, index) => (
          <div key={index} className="answer-option">
            <Form.Check
              type="radio"
              name="answer"
              label={answer}
              checked={selectedAnswer === answer}
              onChange={() => handleAnswerChange(index)}
              className="answer-radio"
            />
          </div>
        ))}

        {notify && <Form.Label>You've completed all the questions for the Basic Assessment! ✔️</Form.Label>}

        <div style={{display: "flex", justifyContent: "center", gap: "2px"}}>
          {indexes.map((ind: number) =>
            <Button onClick={() => goToQuestion(ind)} key={ind} value={ind}>{ind + 1}</Button>
          )}
        </div>

        <div className="navigation">
          <Button onClick={prevQuestion} disabled={currentQuestionIndex === 0}>Previous Question</Button>
          {currentQuestionIndex < 9 && <Button onClick={nextQuestion}>Next Question</Button>}
        </div>

        {notify && (<CareerResults chatPrompt={prompt} tokens={500}></CareerResults>)}

        <div className="progress-row">
          <span className="progress-label">Progress:</span>
          <div className="moveable-box-container">
            <div className="moveable-box" style={{ width: position + 'px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
