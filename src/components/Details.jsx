import React, { useState } from 'react';
import Option from './Option';

export default function Details(props) {

const [workouts,setWorkouts] = useState(0)
const [seniority,setSeniority] = useState(0)

    const saveWorkouts = (e) =>{
        const input = e.target.value
        setWorkouts(input)
    }

    const savesSeniority = (e) =>{
        const input = e.target.value
        setSeniority(input)

    }
    const checkValidtion = ()=>{
        //שמירת הנתונים בדף הראשי
        //בדיקת ולידציה ומעבר לדף הבא
        props.addToTraining({workouts:workouts,seniority:seniority})
        props.changePage('question')
        
    }

  return (
    <div>
      <h1>Enter your details</h1>
      <label for="workouts">How many workouts a week? </label><br></br>
      <select id='workouts' onChange={saveWorkouts}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
     </select><br/><br/>
     <label for="seniority">How many years have you been traning? </label><br></br>
      <select id='seniority' onChange={savesSeniority}>
      <Option/>
     </select><br/><br/>
     <button onClick={checkValidtion}>Next</button>
    </div>
  )
}
