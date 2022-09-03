import React, { useState,useEffect } from 'react';
import Workout from './Workout'
import Trainer from './Trainer';

const pages = {
  trainer: 'trainer',
  workout: 'workout'
}

export default function ShowWorkout(props) {

  const [currentPage, setCurrentPage] = useState(pages.trainer)
  const [results,setResults] = useState(false)
  const [trainingNumber,setTrainingNumber] = useState(0)
  const [trainingKm,setTrainingKm] = useState(0)
  const [counter,setCounter] = useState(props.training.workouts-1)
  
  const saveCounter = ()=>{
    setCounter(counter-1)
    console.log('counter',counter)
    let arr = props.training.trainingArr
    if(counter==0){
      for(let i=0; i<arr.length; i++){
        arr[i].don='no'
       //props.training.trainingArr[i].km*=1.15 
        arr[i].km=Math.round(arr[i].km*1.15)
        setCounter(props.training.workouts-1)
      }
      console.log('after',props.training.trainingArr)
    }
  }
 /* useEffect(()=>{
    let arr = props.training.trainingArr;
    let counter = 0 ;

    for(let i=0; i<arr.length; i++){
      if(arr[i].don == 'no'){
          counter++
      }
    }
    if(counter==1){
      setIsLastTraining(true)
      console.log(isLastTraining)
    }
    //let arr=props.training.trainingArr
    //arr.map((e)=>{e.don=='no'})
   // if(arr.length>0){setIsLastTraining(true)}
   }, [])*/

  /* const checkIsLastTraining = ()=>{
    if(!isLastTraining){
      let arr=props.training.trainingArr.filter((e)=>{e.don=='no'})
      if(arr.length>0){setIsLastTraining(true)}
    } 
   }*/

  const changePage = page => setCurrentPage(page)

  const saveTrainingNumber = (num,km)=>{
    setTrainingNumber(num)
    setTrainingKm(km)
   }
  
   

  const displayPage = () => {
    switch(currentPage) {
      case pages.trainer:
        return <Trainer changePage={changePage} training={props.training} saveTrainingNumber={saveTrainingNumber}/>
      case pages.workout:
        return <Workout changePage={changePage} training={props.training} trainingNumber={trainingNumber} trainingKm={trainingKm} saveCounter={saveCounter} counter={counter}/>
    }
   }
   
  const startTraining =() => {
    if(results== false){
     // setResults(true)
     // results=true
    }
    //setResults(true)
  }

  return (
    <div >
      {displayPage()}
      {/* {!results ?
      <button disabled={enabled} style={{background:background}} className='styleWorkout' value={props.element.no} 
      onClick={startTraining()}>
      Workout N.O :{props.element.no}<br></br> 
      {props.element.km} Km <br></br></button>
      : null}
      <AllWorkout element={props.element}/>
      { results ? <Workout/>: null }
      {<Workout/>} */}
    </div>
    
  )
}
