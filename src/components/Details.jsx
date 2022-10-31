import React, { useState } from 'react';

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
        //Saving data in the APP
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
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="30">30</option>
     </select><br/><br/>
     <button onClick={checkValidtion}>Next</button>
    </div>
  )
}
