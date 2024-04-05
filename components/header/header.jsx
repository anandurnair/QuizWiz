'use client'
import React from 'react'
import Link from "next/link";
import { useSelector } from 'react-redux';

const Header = () => {
  const {currentUser} = useSelector(state => state.user)
  console.log('current user : ',currentUser);
  return (
    <div className='header'>
        <div><h2>Quizify</h2></div>
        <div >
            <ul className='header-list'>
              <Link href='/home'> <li><p>Quiz</p></li></Link> 
             <Link href='leaderboard'> <li><p>Leaderboard</p></li></Link>  
                
            </ul>
        </div>
        <div className='header-left'>
            <p>{currentUser}</p>
            <Link href='/'> <h4>Logout</h4></Link>
           
        </div>
    </div>
  )
}

export default Header
