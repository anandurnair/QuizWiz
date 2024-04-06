'use client'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Link from "next/link";

const InstructorSignup = () => {
    // const router = useRouter()
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
                // router.push('/home')
            }else{
                console.log('error');
            }
            
        } catch (error) {
            console.error('Error:', error);
        }
    }
  return (
    <div className="">
            <h2> Instructor SignUP</h2>
            <div className="signup-inputs">
                <div className="">
                    <label htmlFor="instructorName">Enter username</label>
                    <input type="text" name="instructorName" onChange={(e) => setInstructorName(e.target.value)} />
                </div>
                <div className="">
                    <label htmlFor="email">Enter email</label>
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="">
                    <label htmlFor="password">Enter password</label>
                    <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <div>
                <button onClick={handleSubmit}>Submit</button>
                <Link href='/instructor'>Login</Link>
            </div>
        </div>
  )
}

export default InstructorSignup
