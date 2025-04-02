import React from 'react';
import "./Homepage"
import "./BasicQuizPage"
import { useNavigate } from 'react-router-dom';




export function DetailedQuizPage(): React.JSX.Element {
   
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/')
  }
  const goToBasic = () => {
    navigate('/BasicQuizPage')
  }


    return (
        <div>
          <header style={{backgroundColor: '#282c34', color: "white", minHeight: "100vh"}}>
            <button onClick={goToHome}>Return Home</button>
            <button onClick={goToBasic}>Switch to Basic Quiz</button>
            <h3>This is the Detailed Quiz</h3>
            <p>The Detailed Quiz is a longer assessment, designed to help users to focus in on specific career recommendations. This is ideal for users who are making serious considerations anout their future career</p>
          </header>
                    
        </div>
    );
}


export default DetailedQuizPage