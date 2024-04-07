'use client'
import React, { useState } from 'react'
import '../style/globals.scss'
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux';
import {updateUser} from '../redux/user'
const Login = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('');
  const handlesubmit =async(e)=>{
    e.preventDefault();
    console.log(username, password);
    try {
        const res = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        if(res.ok){
           dispatch(updateUser(username))
            sessionStorage.setItem('currentUser',username)
            console.log('Sucessfully ');
            router.push('/home')
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
      <h2>Log In</h2>
      <div className="login-inputs">
        
        <div className="">
          <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)} placeholder='Enter your username' required/>
        </div>
        <div className="">
          <input type="text" name="password" placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} required />
        </div>
      </div>
      <div className='login-btns'>
        <button onClick={handlesubmit}>Login</button>
      <p>Create an account ? <Link href='/signup'>Signup</Link> </p>  
      </div>
    </div>
    </div>
    
  )
}

export default Login
