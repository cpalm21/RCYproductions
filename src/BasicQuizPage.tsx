// BasicQuizPage.tsx
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CareerResults } from './Career';
import './BasicQuizPage.css';


export function BasicQuizPage(): React.JSX.Element {

  const navigate = useNavigate();
  const goToHome = () => navigate('/');
  const goToDetailed = () => navigate('/DetailedQuizPage');

  const [question1Answer, setQuestion1Answer] = useState<string | null>(null);
  const [question2Answer, setQuestion2Answer] = useState<string | null>(null);
  const [question3Answer, setQuestion3Answer] = useState<string | null>(null);
  const [question4Answer, setQuestion4Answer] = useState<string | null>(null);
  const [question5Answer, setQuestion5Answer] = useState<string | null>(null);
  const [question6Answer, setQuestion6Answer] = useState<string | null>(null);
  const [question7Answer, setQuestion7Answer] = useState<string | null>(null);
  const [question8Answer, setQuestion8Answer] = useState<string | null>(null);
  const [question9Answer, setQuestion9Answer] = useState<string | null>(null);
  const [question10Answer, setQuestion10Answer] = useState<string | null>(null);

  const [position, setPosition] = useState<number>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [notify, setNotify] = useState<boolean>(false);
  const [answered, setAnswered] = useState<boolean[]>(Array(10).fill(false));
    const prompt = `Based on the following responses, suggest the top 3 best-fit careers. Return the response as a JSON array of objects with fields: title, salary, summary, and match (percentage).

1. ${question1Answer}
2. ${question2Answer}
3. ${question3Answer}
4. ${question4Answer}
5. ${question5Answer}
6. ${question6Answer}
7. ${question7Answer}
8. ${question8Answer}
9. ${question9Answer}
10. ${question10Answer}`;


  const handleAnswerChange = (index: number) => {
    const answers = questions[currentQuestionIndex].answers;
    if (!answered[currentQuestionIndex]) {
      const updated = [...answered];
      updated[currentQuestionIndex] = true;
      setAnswered(updated);
      setPosition(position + 40);
      notifyIfDone(updated);
    }
    const setter = [
      setQuestion1Answer, setQuestion2Answer, setQuestion3Answer, setQuestion4Answer,
      setQuestion5Answer, setQuestion6Answer, setQuestion7Answer, setQuestion8Answer,
      setQuestion9Answer, setQuestion10Answer
    ];
    setter[currentQuestionIndex](answers[index]);
  };

  const notifyIfDone = (arr: boolean[]) => {
    if (arr.every((v) => v)) setNotify(true);
  };

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
      ], selectedAnswer: question1Answer
    },
    {
      question: "Which of the following best describes your preferred work environment and flexibility for your future career?",
      answers: [
        "I prefer a hybrid or remote work environment and my future career must offer this flexibility.",
        "I prefer a hybrid or remote work environment, but I am open to other work setups if necessary.",
        "I prefer working in an office environment, but I would consider hybrid or remote work options.",
        "I prefer working in an office or fieldwork environment and am not interested in hybrid or remote work."
      ], selectedAnswer: question2Answer
    },
    {
      question: "How important is travel as part of your future job?",
      answers: [
        "I would love to travel as part of my job and see it as an important aspect of my career.",
        "I am open to occasional travel for work, but it's not a priority.",
        "I prefer to work in a job that doesn't require travel.",
        "I am not interested in travel for work at all."
      ], selectedAnswer: question3Answer
    },
    {
      question: "How would you prioritize work-life balance in your future career?",
      answers: [
        "I would accept a lower-paying job if it offered me more free time away from work.",
        "I would prefer a higher-paying job, even if it meant less free time.",
        "I would balance both salary and free time equally when considering a job.",
        "I would not prioritize free time over salary in my career decisions."
      ], selectedAnswer: question4Answer
    },
    {
      question: "Do you like working in teams?",
      answers: [
        "I enjoy working in teams and collaborating with others.",
        "I prefer working alone and having independent control over my tasks.",
        "I like a mix of both team work and solo work, depending on the situation.",
        "I am flexible and can adapt to either team-based or solo work environments."
      ], selectedAnswer: question5Answer
    },
    {
      question: "What is your favorite subject in school?",
      answers: ["Math.", "Science.", "Reading/Writing.", "P.E. (Physical Education)."],
      selectedAnswer: question6Answer
    },
    {
      question: "How many books have you read in the past year?",
      answers: ["0-2.", "2-4.", "4-6.", "More than 6."],
      selectedAnswer: question7Answer
    },
    {
      question: "What is your preferred method of problem-solving?",
      answers: [
        "Analytical (based on logic, data, and systematic thinking).",
        "Creative (thinking outside the box and finding innovative solutions).",
        "Collaborative (working with others to find solutions).",
        "Hands-on (learning by doing and trying out solutions practically)."
      ], selectedAnswer: question8Answer
    },
    {
      question: "How interested are you in management and overseeing daily operations in your future career?",
      answers: [
        "I would be very interested in managing people and planning day-to-day operations.",
        "I am somewhat interested in management and operations but prefer focusing on other areas.",
        "I prefer to avoid managing people and would rather focus on specialized tasks.",
        "I have no interest in management and prefer independent, non-managerial roles."
      ], selectedAnswer: question9Answer
    },
    {
      question: "How passionate are you about starting your own business?",
      answers: [
        "I am very passionate about starting my own business and see it as my future goal.",
        "I am somewhat interested in starting my own business but may also consider other career paths.",
        "I am not particularly interested in starting my own business but would support others who do.",
        "I have no interest in starting my own business and prefer working for established companies."
      ], selectedAnswer: question10Answer
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
        <h4 className="question-label">Question:</h4>
        <Form.Control type="text" value={question} readOnly className="question-input" />
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
