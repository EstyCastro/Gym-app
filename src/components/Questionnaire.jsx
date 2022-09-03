import React from 'react'
import {Link,useNavigate} from 'react-router-dom';

export default function Questionnaire(props) {
 const navigate = useNavigate();
 const saveDetails = ()=>{
    //שמירת הנתונים 
    //פתיחת הערוץ של המתאמן 
    navigate(`/showWorkout/${props.fullName}`);
    //navigate(`/traning`);
 }

 const rolleback = ()=>{
     //חזרה לדף הראשי ואיפוס הנתונים  
     props.deletTraining()
     console.log('props.training',props.training)
     props.changePage('home')  
 }
  return (
    <div>
      <h1>Ready?</h1>
      <button onClick={saveDetails}>Yes</button>
      <button onClick={rolleback}>No</button>
    </div>
  )
}
