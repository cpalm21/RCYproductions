import { Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import './Homepage.css'
import { useState } from "react";




export function Homepage(): React.JSX.Element {
 
//<img id="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAelxWhvC_4OPKqCB_LMflgJhSyebR9xUGNQ&amp;s" />




//<h1 className="App-title">Career Assessment Quiz</h1>


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
<div className="header-container">
<h1 className="header">
  Find your Future Career
</h1>


<div>
<img id="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujTSOWwqSxOgxcTfAmkHjN7BHYF3H70eYcFgyW3bGrU7dhYL-eR0uC91UZFOH353WTfI&usqp=CAU" alt="people doing different careers" />


</div>
</div>




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


