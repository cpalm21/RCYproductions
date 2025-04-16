import { Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import './Homepage.css'
import { useState } from "react";


export function Homepage(): React.JSX.Element {
  
  const [aboutDetailed, setaboutDetailed] = useState<boolean>(false);
  const [aboutBasic, setaboutBasic] = useState<boolean>(false);
  

  const navigate = useNavigate();

  const goToDetailed = () => {
    navigate('/DetailedQuizPage')
  }

  const goToBasic = () => {
    navigate('/BasicQuizPage')
  }

  function isAboutDetailed(): void{
    if(!aboutDetailed){
      setaboutDetailed(true);
    }
    else{
      setaboutDetailed(false);
    }    


  }

  function isAboutBasic(): void{
    if(!aboutBasic){
      setaboutBasic(true);
    }
    else{
      setaboutBasic(false);
    }    


  }


  return (


   
<div>

<Button onClick={goToDetailed} size="lg" style={{ marginRight: "400px", padding: "120px 24px" }}>
  Detailed Quiz
</Button>
<Button onClick={goToBasic} size="lg" style={{ padding: "120px 45px" }}>
  Basic Quiz
</Button>
<div className="bothAbout">
<div className="aboutDetailed">
  <Button onClick={isAboutDetailed}>About the Detailed Quiz</Button>
  {aboutDetailed &&  <div className="detailedDescription">The Detailed Quiz is a longer assessment, designed to help users to focus in on specific career recommendations. This is ideal for users who are making serious considerations about their future career.</div>}
</div>
<div className="aboutBasic">
  <Button onClick={isAboutBasic}>About the Basic Quiz</Button>
  {aboutBasic && <div className="basicDescription">The Basic Quiz is a short assessment, designed to give users a broad array of career recommendations.
    This is ideal for users who are curious but aren't seeking specific career recommendations.</div>}
</div>
</div>


</div>
  );
}
