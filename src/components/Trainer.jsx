import React, { useState } from 'react';
import AllWorkout from './AllWorkout'

export default function Trainer(props) {
  const workouts = props.training.workouts
  const seniority = props.training.seniority
  const [results,setResults] = useState(true)
  let kil = (seniority*5)/workouts
    
    function showWorkout  (){
        if(props.training.trainingArr.length == 0){
            for(let i=0; i<workouts; i++){ // Creating array of trainings 
                console.log(i)
                kil=Math.round(kil+kil*0.15) 
                props.training.trainingArr.push({no:i+1,km:kil,don:'no'})  
            }
        }  
        console.log(props.training.trainingArr)
        setResults(false) //prevent infinite running of the function
    }

    const StartTraining = ()=>{
        let arr = props.training.trainingArr ; 
        console.log('arr',arr)
       /* props.training.trainingArr.find((item)=>{
            console.log('item item item',item)
            if(item.don == 'no'){
            props.saveTrainingNumber(item.no)
            props.changePage('workout')
             } })*/

        for(let i=0; i<arr.length; i++){
            if(arr[i].don == 'no'){
                props.saveTrainingNumber(arr[i].no,arr[i].km)
                props.changePage('workout')
                break;
            }
        }
      }
    
  return (
    <div>
      <h1>Welcome Trainer</h1>
      <button onClick={StartTraining}>Start</button>
      { results ? showWorkout(): null }
      {console.log('props.training.trainingArr',props.training.trainingArr) }
      {props.training.trainingArr.map((e)=>{
            console.log('e',e) 
            return <AllWorkout element={e} changePage={props.changePage} saveTrainingNumber={props.saveTrainingNumber}/>
        })} 
    </div>
  )
}
