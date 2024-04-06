'use client'
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

const Signup = () => {
    const router = useRouter()
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, email, password);
        try {
            const res = await fetch('http://localhost:3000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });
            if(res.ok){
                console.log('Sucessfully ');
                router.push('/home')
            }else{
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
            <h2>Create account</h2>
            <div className="login-inputs">
                <div className="">
                    <input type="text" name="username" placeholder="Enter username" onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="">
                    <input type="text" name="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="">
                    <input type="text" name="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <div className="login-btns">
                <button onClick={handleSubmit}>Submit</button>
                <p>Already have an account ? <Link href='/'>Login</Link></p>
            </div>
            </div>
            
        </div>
    );
};

export default Signup;
