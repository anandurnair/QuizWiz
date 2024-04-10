'use client'
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter()
  const [currentUser,setCurrentUser] = useState()
  useEffect(()=>{
    setCurrentUser(sessionStorage.getItem('currentUser'))    
  },[])  
  const handleLogout =()=>{
    sessionStorage.removeItem('currentUser');
    router.push('/')
  }
  return (
    <div className='header'>
        <div style={{display:'flex'}}><h1>Q</h1><h2 style={{color:'#2f2f2f',marginTop:'5px'}}>uizwiz</h2></div>
        <div >
            <ul className='header-list'>
              <Link href='/home' style={{textDecorationLine:'none'}}> <li><p>Quiz</p></li></Link> 
             <Link href='leaderboard' style={{textDecorationLine:'none'}}> <li><p>Leaderboard</p></li></Link>  
                
            </ul>
        </div>
        <div className='header-left'>
            <h3>{currentUser}</h3>
            <div onClick={handleLogout}><h3 style={{borderRadius:'5px',border:'2px solid #fff',color:'#ffff',padding:'6px 12px',marginTop:'-10px'}}>Logout</h3></div>
           
           
        </div>
    </div>
  )
}

export default Header
