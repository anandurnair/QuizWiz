'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Instructor = () => {
  const [currentInstructor,setCurrentInstructor]= useState()
   useEffect(()=>{
    setCurrentInstructor(sessionStorage.getItem('currentInstructor'))
  },[])
  
   console.log('currentInstructor : ',currentInstructor);
  return (
    <div className="main-card">
      <div className="welcome-title">
        <h2>Hello Instructor Welcome to Quizwix</h2>
      </div>
      <h2>{currentInstructor}</h2>
      <div ><Link href='/instructor/dashboard/create-quiz'><button className="btn">Create quiz</button></Link></div>   
    </div>
  )
}

export default Instructor
