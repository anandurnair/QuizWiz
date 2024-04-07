'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Link from "next/link";

const InstructorSignup = () => {
    const router = useRouter()
    const [instructorName, setInstructorName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(instructorName, email, password);
        try {
            const res = await fetch('http://localhost:3000/api/instructor/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ instructorName, email, password })
            });
            if(res.ok){
                console.log('Sucessfully ');
                sessionStorage.setItem('currentInstructor',instructorName)
                router.push('/instructor/dashboard')
            }else{
                console.log('error');
            }
            
        } catch (error) {
            console.error('Error:', error);
        }
    }
  return (
    <div className="login-page">
        <div className='login-card'>
        <div className='login-welcome'>
           <h1>Welcome to QuizWizz</h1>
        </div>
      
            <h2> Instructor SignUP</h2>
            <div className="login-inputs">
                <div className="">
                    {/* <label htmlFor="instructorName">Enter username</label> */}
                    <input placeholder='Enter instructor name' type="text" name="instructorName" onChange={(e) => setInstructorName(e.target.value)} required />
                </div>
                <div className="">
                    {/* <label htmlFor="email">Enter email</label> */}
                    <input placeholder='Enter email' type="text" name="email" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="">
                    {/* <label htmlFor="password">Enter password</label> */}
                    <input type="text" placeholder='Enter password' name="password" onChange={(e) => setPassword(e.target.value)} required />
                </div>
            </div>
            <div>
                <button className='btn' onClick={handleSubmit}>Submit</button>
                <Link href='/instructor'>Login</Link>
            </div>
            </div>
        </div>
  )
}

export default InstructorSignup
