import React, { useState } from 'react';
import AllWorkout from './AllWorkout'
//import Workout from './Workout'

export default function Trainer(props) {
  const workouts = props.training.workouts
  const seniority = props.training.seniority
  const [results,setResults] = useState(true)
  //const [trainingArr,setTrainingArr] = useState([])
  //const trainingArr = []
  //const [kilometer,setkilometer] =useState((seniority*5)/workouts)
  let kil = (seniority*5)/workouts

 /* const showWorkout = ()=>{
    for(let i=0; i<workouts;i++){ // יצירת מערך של אימונים 
        let item = {no:(i+1),km:kilometer}
        setTrainingArr([item,...trainingArr])
        setkilometer(kilometer*0.15)
    }
    setResults(false)
    console.log(trainingArr)
    /*trainingArr.map((e)=>{
        <Workout element={e}/>
    })*/ 
    
    function showWorkout  (){
        if(props.training.trainingArr.length == 0){
            for(let i=0; i<workouts; i++){ // יצירת מערך של אימונים 
                console.log(i)
                //let item = {no:i,km:kil}
                kil=Math.round(kil+kil*0.15) 
                //console.log(item)
                props.training.trainingArr.push({no:i+1,km:kil,don:'no'})
                //setTrainingArr([item,...trainingArr])
                //setkilometer(kilometer*0.15+kilometer)  
            }
        }  
        console.log(props.training.trainingArr)

        /*props.training.trainingArr.map((e)=>{
            console.log('e',e) 
            return <Workout />
        })*/
        setResults(false) //למנוע ריצה אינסופית של הפונקציה
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
                // return <Workout item={arr[i]}/>
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
            //return <AllWorkout />
        })} 
    </div>
  )
}
