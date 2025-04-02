import React from 'react';
import "./Homepage"
import "./DetailedQuizPage"
import { useNavigate } from 'react-router-dom';




export function BasicQuizPage(): React.JSX.Element {
   
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/')
  }

  const goToDetailed = () => {
    navigate('/DetailedQuizPage')
  }



    return (
        <div>
          <header style={{backgroundColor: '#282c34', color: "white", minHeight: "100vh"}}>
            <button onClick={goToHome}>Return Home</button>
            <button onClick={goToDetailed}>Switch to Detailed Quiz</button>
            <h3>This is the Basic Quiz</h3>
            <p>The Basic Quiz is a short assessmment, designed to give users a broad array of career recommendations. This is ideal for users who are curious but aren't seeking for specific career recommendations.</p>
          </header>
        </div>
    );
}


export default BasicQuizPage