'use client'
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
    <div className="">
      <h2>Instructor LogIn</h2>
      <div className="login-inputs">
        <div className="">
          <label htmlFor="instructorName">Enter InstrutorName</label>
          <input
            type="text"
            name="instructorName"
            onChange={(e) => setInstructorName(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="password">Enter password</label>
          <input
            type="text"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button onClick={handlesubmit}>Login</button>
        <Link href="/signup">Signup</Link>
      </div>
    </div>
  );
};

export default InstructorLogin;
