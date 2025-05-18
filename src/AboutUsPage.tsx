
import { useNavigate } from "react-router-dom";
import {  Navbar } from "react-bootstrap";
import './AboutUsPage.css';
export function AboutPage(): React.JSX.Element {
  

  const navigate = useNavigate();
  const goToHome = () => navigate('/');


  return (

    <div>
      
        {/* Top Navbar */}
      <Navbar className="top-navbar">
        <button className="btn" onClick={goToHome}>Return Home</button>
      </Navbar>
      <div className="hero-banner"></div>
      <h1 className="about-title">About Us</h1>

     {/* cards */}
    <div className="cards-section">
        <div className="personal-cards"></div>
      {/* Yaz */}
          <div className="personal-card">
            <div className="card-body">
                  {/* User Icon */}
  <img src="https://images.icon-icons.com/3054/PNG/512/account_profile_user_icon_190494.png" alt="User Icon" className="user-icon" />
              <h2 className="card-title">Yazan Alsuraibi</h2>
              <p className="card-text">
                Hey! My name is Yaz, and I'm a computer science student at UD. A fun fact about me is I drink coffee more than water. You can reach out to me thorugh the information below!
              </p>
              
            
              <div className="about-text">
                Email: Ysuraibi@udel.edu
              </div>
            </div>
          </div>


        {/* Ray */}
          <div className="personal-card">
            <div className="card-body">
                  {/* User Icon */}
  <img src="https://images.icon-icons.com/3054/PNG/512/account_profile_user_icon_190494.png" alt="User Icon" className="user-icon" />
              <h2 className="card-title">Ray Spencer</h2>
              <p className="card-text">
                I'm currently majoring in Physics with a concentration in Astronomy, and minoring in Computer Science. I work at the University of Delaware as a teaching assistant in the Computer Science department, and a supporting instructor in the Computer Engineering department.
              </p>
              
            
              <div className="about-text">
                Email: rts@udel.edu
              </div>
            </div>
          </div>
         
        {/* Christian */}
          <div className="personal-card">
            <div className="card-body">
                  {/* User Icon */}
  <img src="https://images.icon-icons.com/3054/PNG/512/account_profile_user_icon_190494.png" alt="User Icon" className="user-icon" />
              <h2 className="card-title">Chiristian Palmer</h2>
              <p className="card-text">
                Hey! My name is Christian, and I'm a computer science student at UD with a concentration in Cybersecurity and a minor in FinTech. I love hanging out with friends, playing soccer, and going to the gym. 
              </p>
              
            
              <div className="about-text">
                Email: palmerc@udel.edu
              </div>
            </div>
          </div>
         
         
    </div>
    </div>
    
   
  );
}