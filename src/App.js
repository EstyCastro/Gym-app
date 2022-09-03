import './App.css';
import {HashRouter as Router, Routes , Route} from 'react-router-dom';
import React, { useState ,useEffect } from 'react';
import HomePage from './components/HomePage'
import Details from './components/Details';
import Questionnaire from './components/Questionnaire';
import ShowWorkout from './components/ShowWorkout'


const pages = {
  home: 'home',
  details: 'details',
  question: 'question'
}

function App() {

  const [currentPage, setCurrentPage] = useState(pages.home)
  const [training,setTraining] = useState({}) 

  const changePage = page => setCurrentPage(page)
  
  const saveTraining = (e)=>{
    //useEffect(() => {
      setTraining(e)
   // });
      console.log(training)
    }
  const addToTraining = (e)=>{
    //useEffect(() => {
      setTraining({id:training.id,fullName:training.fullName,gender:training.gender,workouts:e.workouts,seniority:e.seniority,trainingArr:[]})
    // });
     console.log(training)
    }
  const deletTraining=()=>{
    setTraining({})
  }

  const displayPage = () => {
   switch(currentPage) {
     case pages.home:
       return <HomePage changePage={changePage} saveTraining={saveTraining}/>
     case pages.details:
       return <Details changePage={changePage} addToTraining={addToTraining}/>
     case pages.question:
       return <Questionnaire changePage={changePage} deletTraining={deletTraining} training={training} fullName={training.fullName}/>
   }
  }

  return (
    <div className="App">
    <header>
     <Router>
       <Routes>
         <Route path='/' element={displayPage()} />
         <Route path={`/showWorkout/${training.fullName}`} element={<ShowWorkout training={training}/>} /> 
       </Routes>
     </Router>
     </header>
    </div>
  );
}

export default App;
