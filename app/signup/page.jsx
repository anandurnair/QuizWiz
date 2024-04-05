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
        <div className="">
            <h2>SignUP</h2>
            <div className="signup-inputs">
                <div className="">
                    <label htmlFor="username">Enter Username</label>
                    <input type="text" name="username" onChange={(e) => setUserName(e.target.value)} />
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
                <Link href='/'>Login</Link>
            </div>
        </div>
    );
};

export default Signup;
