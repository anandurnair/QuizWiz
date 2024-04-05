'use client'
import Link from "next/link";
import { useSelector } from "react-redux";

const Instructor = () => {
   const {currentInstructor} = useSelector(state => state.instructor)
   console.log('currentInstructor : ',currentInstructor);
  return (
    <div >
      <h2>{currentInstructor}</h2>
      <div><Link href='/instructor/dashboard/create-quiz'><button >Create quiz</button></Link></div>   
    </div>
  )
}

export default Instructor
