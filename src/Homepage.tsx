import { Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom"


export function Homepage(): React.JSX.Element {
  
  const navigate = useNavigate();

  const goToDetailed = () => {
    navigate('/DetailedQuizPage')
  }


  return (


   
<span>
<Button onClick={goToDetailed} size="lg" style={{ marginRight: "400px", padding: "120px 24px" }}>
  Detailed Quiz
</Button>
<Button size="lg" style={{ padding: "120px 45px" }}>
  Basic Quiz
</Button>
</span>
  );
}
