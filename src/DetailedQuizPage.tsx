import React from 'react';
import "./Homepage"
import { useNavigate } from 'react-router-dom';




export function DetailedQuizPage(): React.JSX.Element {
   
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/')
  }


    return (
        <div>
            <button onClick={goToHome}>Return Home</button>
        
        </div>
    );
}


export default DetailedQuizPage