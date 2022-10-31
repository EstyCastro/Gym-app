import React, { useState,useEffect } from 'react';
import Details from './Details'

export default function HomePage(props) {    
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

    const checkValidtion = ()=>{
        //Validation check and move to the next page
        if(id && fullName && gender ){ // Adding the training data 
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
    </div>
  )
}
