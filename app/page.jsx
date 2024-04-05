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
    <div className="">
      <h2>LogIn</h2>
      <div className="login-inputs">
        
        <div className="">
          <label htmlFor="username">Enter username</label>
          <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)} />
        </div>
        <div className="">
          <label htmlFor="password">Enter password</label>
          <input type="text" name="password" onChange={(e)=>setPassword(e.target.value)} />
        </div>
      </div>
      <div>
        <button onClick={handlesubmit}>Login</button>
        <Link href='/signup'>Signup</Link>
      </div>
    </div>
  )
}

export default Login
