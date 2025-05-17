import { Button, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function AboutPage(): React.JSX.Element {
  

  const navigate = useNavigate();
  const goToHome = () => navigate('/');


  return (

    <div>
      <button onClick={goToHome}>Home</button>
      <h1>Welcome to The Career Quiz</h1>
    </div>
    
   
  );
}