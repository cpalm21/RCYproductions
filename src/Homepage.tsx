import { Button, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Homepage.css';

export function Homepage(): React.JSX.Element {
  const navigate = useNavigate();

  const goToDetailed = () => navigate('/DetailedQuizPage');
  const goToBasic = () => navigate('/BasicQuizPage');

  return (
    <div className="homepage" style={{ marginTop: '0px' }}>
      
      {/* Top Navbar */}
      <Navbar className="top-navbar">
        <Nav.Item className="user-greeting">RCY Productions</Nav.Item>
        <Nav>
          <Nav.Item className="user-greeting">Hey, User!</Nav.Item>
        </Nav>
      </Navbar>
      <div className="hero-banner">
  <h1>Welcome to The Career Quiz</h1>
  <p>Discover your career path with quick and personalized quizzes!</p>
</div>
      {/* Main Section */}
      <div className="quiz-section">
        <div className="quiz-cards">

          {/* Detailed Quiz Card */}
          <div className="quiz-card">
            <div className="card-body">
              <h2 className="card-title">Detailed Quiz</h2>
              <p className="card-text">
                Take a deep career assessment to find the best fit for you.
              </p>
              <Button variant="primary" onClick={goToDetailed}>
                Start Detailed Quiz
              </Button>
              <div className="about-text">
                The Detailed Quiz is a longer assessment designed for serious career planning.
              </div>
            </div>
          </div>

          {/* Basic Quiz Card */}
          <div className="quiz-card">
            <div className="card-body">
              <h2 className="card-title">Basic Quiz</h2>
              <p className="card-text">
                Get a quick overview of career options with a short quiz.
              </p>
              <Button variant="primary" onClick={goToBasic}>
                Start Basic Quiz
              </Button>
              <div className="about-text">
                The Basic Quiz is a short assessment ideal for general exploration.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
