import React from 'react';
import "./Homepage"
import {DetailedQuizPage} from "./DetailedQuizPage"
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
            
            <button onClick={goToHome}>Go Home</button>
            <button onClick={goToDetailed}>Switch to Detailed</button>
            <div>This is the basic Quiz</div>
        
        </div>
    );
}


export default BasicQuizPage