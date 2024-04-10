'use client'
import React, { useEffect } from 'react'

const LeaderBoard = () => {
  useEffect(()=>{
    const fetchScore = async () => {
      try {
        console.log("Working");
        const res = await fetch("http://localhost:3000/api/scores", {
          method: "GET",
        });
        if (res.ok) {
          // alert('Successfully fetched');
          
        } else {
          // alert('Data fetch failed');
          console.log("Error");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchScore();
  },[])
  return (
    <div>
      <h2>Leaderboard</h2>
    </div>
  )
}

export default LeaderBoard
