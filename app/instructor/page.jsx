'use client'
import '../../style/globals.scss'
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux';
import {updateInstructor} from '../../redux/instructor'
const InstructorLogin = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [instructorName,setInstructorName] = useState('')
    const [password,setPassword] = useState('');
    const handlesubmit =async(e)=>{
      e.preventDefault();
      console.log(instructorName, password);
      try {
          const res = await fetch('http://localhost:3000/api/instructor/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ instructorName, password })
          });
          if(res.ok){
             dispatch(updateInstructor(instructorName))
              console.log('Sucessfully ');
              sessionStorage.setItem('currentInstructor',instructorName)
              router.push('/instructor/dashboard')
          }else{
            alert('Invalid password')
  
              console.log('error');
          }
          
      } catch (error) {
          console.error('Error:', error);
      }
    }
  return (
    <div className="login-page">
      <div className="login-card">
      <div className='login-welcome'>
           <h1>Welcome to QuizWizz</h1>
        </div>
      <h2>Instructor LogIn</h2>

      <div className="login-inputs">
        <div className="">
          <input
          placeholder='Enter instructor name'
            type="text"
            name="instructorName"
            onChange={(e) => setInstructorName(e.target.value)}
            required
          />
        </div>
        <div className="">
          <input
          placeholder='Enter password'
            type="text"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>
      <div>
        <div className="login-btns">

        <button onClick={handlesubmit}>Login</button>
        <Link href="/instructor/signup">Signup</Link>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default InstructorLogin;
