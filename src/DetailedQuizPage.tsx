import React from 'react';
import "./Homepage"
import {BasicQuizPage} from "./BasicQuizPage"
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
            <button onClick={goToHome}>Return Home</button>
            <button onClick={goToBasic}>Switch to Basic Quiz</button>
            <div>This is the Detailed Quiz</div>
        
        </div>
    );
}


export default DetailedQuizPage