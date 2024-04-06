'use client'
import React from 'react'
import Link from "next/link";
import { useSelector } from 'react-redux';

const Header = () => {
  const {currentUser} = useSelector(state => state.user)
  console.log('current user : ',currentUser);
  return (
    <div className='header'>
        <div style={{display:'flex'}}><h1>Q</h1><h2 style={{color:'#2f2f2f',marginTop:'5px'}}>uizify</h2></div>
        <div >
            <ul className='header-list'>
              <Link href='/home' style={{textDecorationLine:'none'}}> <li><p>Quiz</p></li></Link> 
             <Link href='leaderboard' style={{textDecorationLine:'none'}}> <li><p>Leaderboard</p></li></Link>  
                
            </ul>
        </div>
        <div className='header-left'>
            <p>{currentUser}</p>
            <Link style={{textDecorationLine:'none'}} href='/'> <h4>Logout</h4></Link>
           
        </div>
    </div>
  )
}

export default Header
