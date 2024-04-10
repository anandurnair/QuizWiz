'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Instructor = () => {
  const [currentInstructor,setCurrentInstructor]= useState(null)
   useEffect(()=>{
    setCurrentInstructor(sessionStorage.getItem('currentInstructor'))
    
  },[])

  useEffect(()=>{
    
    if(currentInstructor != null){
      const fetchData = async () => {
        const res = await fetch("http://localhost:3000/api/instructorQuiz", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({instructorName :currentInstructor }),
        });
        if (res.ok) {
          // 
          alert('fetched')
        } else {
          console.log("Error");
        }
      };
      fetchData();
    }
  },[currentInstructor])
  
   console.log('currentInstructor : ',currentInstructor);
  return (
    <div className="main-card">
      <div className="login-welcome">
        <h2>Hello {currentInstructor} to Quizwiz</h2>
      </div>
      <h3>You can create Quizes</h3>
      <div ><Link href='/instructor/dashboard/create-quiz'><button className="btn">Create quiz</button></Link></div>   
    </div>
  )
}

export default Instructor
