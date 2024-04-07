'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

export default function InstructortDashboardLayout({ children }) {
    const [currentInstructor,setCurrentInstructor] = useState()
    useEffect(()=>{
        setCurrentInstructor(sessionStorage.getItem('currentInstructor'))
    },[])
    return (
          <div className="instructor-page">
           <div className='header'>
        <div style={{display:'flex'}}><h1>Q</h1><h2 style={{color:'#2f2f2f',marginTop:'5px'}}>uizwiz</h2></div>
        <div >
            {/* <p>Hello instructor </p> */}
            <ul className='header-list'>
              <Link href='/instructor/dashboard' style={{textDecorationLine:'none'}}> <li><p>Home</p></li></Link> 
             {/* <Link href='leaderboard' style={{textDecorationLine:'none'}}> <li><p>Leaderboard</p></li></Link>   */}
                
            </ul>
        </div>
        <div className='header-left'>
            <p>{currentInstructor}</p>
            <Link style={{textDecorationLine:'none'}} href='/'> <h4>Logout</h4></Link>
           
        </div>
    </div>
          {children}
          </div>
     
    );
  }