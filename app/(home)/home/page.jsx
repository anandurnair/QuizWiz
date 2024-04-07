"use client";
import dbConnect from "@/db/mongodb";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();
  // const { currentUser } = useSelector((state) => state.user);
  const [quizes, setQuizes] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        console.log("Working");
        const res = await fetch("http://localhost:3000/api/questions", {
          method: "GET",
        });
        if (res.ok) {
          // alert('Successfully fetched');
          const data = await res.json();
          let questions = data.questions;
          setQuizes(questions);
        } else {
          // alert('Data fetch failed');
          console.log("Error");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    console.log(quizes);
  }, [quizes]);
  const handleQuiz = async (quizId) => {
    console.log("Quiz id : ", quizId);
    router.push(`/quiz/${quizId}`);
  };
  return (
    <main>
      <div className="main">
        <div className="main-card">
          <div className="login-welcome">
            <h1>Welcome to QuizWizz</h1>
          </div>
          <h2>Choose a quiz</h2>
          {/* <Link href="/quiz">
            <button className="btn">Start quiz</button>
          </Link> */}
          <div className="quiz-list">
            {quizes &&
              quizes.map((quiz, index) => (
                <div
                  className="quiz-card"
                  key={quiz._id}
                  onClick={() => handleQuiz(quiz._id)}
                >
                  <div style={{display:'flex',}}>
                    <h3 style={{marginRight:'20px'}}>{index +1}</h3>
                    <h3>{quiz.title}</h3>
                  </div>
                  
                  <div>
                    <p>{quiz.instructorId.instructorName}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
