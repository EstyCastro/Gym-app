import React, { useState,useEffect } from 'react';
import Details from './Details'

export default function HomePage(props) {    
//const [training,setTraining] = useState({})
const [id,setId] = useState('')
const [fullName,setFullName] = useState('')
const [gender,setGender] = useState('')
const [element,setElement]=useState({}) 

    const saveId = (e)=>{
        const input = e.target.value
        //add validtion
        setId(input)
    }
    const saveFullName = (e)=>{
        const input = e.target.value
        //add validtion
        setFullName(input)
    }
    const saveGender = (e)=>{
        const input = e.target.value
        //add validtion
        setGender(input)
    }
   
    const SaveElement = ()=>{
        setElement({id:id,fullName:fullName,gender:gender})
    }
   
   /* function SaveElement() {
        const[element,setElement]=useState({}) 
      
        useEffect(() => {
            setElement({id:id,fullName:fullName,gender:gender})
        }, [element]);
      
        return [element, setElement];
     }*/
 

    const checkValidtion = ()=>{
        //בדיקת ולידציה ומעבר לדף הבא 
        if(id && fullName && gender ){ // הוספת הנתונים למשתנה מתאמן 
           // SaveElement()
            props.saveTraining({id:id,fullName:fullName,gender:gender})
            props.changePage('details')
        }else{
            alert("Make sure all fields are filled out")
        }
        
    }

  return (
    <div className='styleBody'>
      <h1>Enter your details</h1><br></br>
      <input required placeholder='Enter your fullname' onChange={saveFullName}></input><br></br>
      <input required placeholder='Enter your id' onChange={saveId}></input><br></br>
      <label for="gender">Choose gender : </label>
      <select id='gender' onChange={saveGender}>
        <option  value=""></option>
        <option  value="male">male</option>
        <option selected="selected" value="female">female</option>
      </select><br/><br/>
      <button onClick={checkValidtion}>Next</button>
      {/* {<Details  saveTraining={saveTraining}></Details> } */}
    </div>
  )
}
