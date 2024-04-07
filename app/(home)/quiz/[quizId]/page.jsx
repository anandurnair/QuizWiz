"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { GrStatusGood } from "react-icons/gr";

const Quiz = ({ params }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [quizId, setQuizId] = useState("");
  const [quizs, setQuizs] = useState();
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [correct, setCorrect] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  useEffect(() => {
    setQuizId(params.quizId);
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/selectQuestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quizId }),
      });
      if (res.ok) {
        const data = await res.json();
        if (Object.keys(data.quiz).length !== 0) {
          setQuizs(data.quiz);
          console.log("Data : ", data.quiz);
        }
        console.log("Worked");
      } else {
        console.log("Error");
      }
    };
    fetchData();
  }, [quizId]);

  useEffect(() => {
    if (quizs && quizs.questions) {
      const { question, options, correct } = quizs.questions[activeQuestion];
      setQuestion(question);
      setOptions(options);
      setCorrect(correct);
      console.log("Every Data : ", question, options, correct);
    }
  }, [quizs, activeQuestion]);

  const handleClickAnswers = (ans, idx) => {
    console.log('Index' , idx , 'answer : ',correct);
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (idx == correct) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== quizs.questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      const postScore = async () => {
        const res = await fetch("http://localhost:3000/api/scores", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({username : currentUser,quiz:quizId,total :quizs.questions.length,totalScore:result.score,totalCorrect:result.correctAnswers,totalWrong : result.wrongAnswers   }),
        });
        if (res.ok) {
          const data = await res.json();
        
          console.log("Worked");
        } else {
          console.log("Error");
        }
      };
      postScore();
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div className="main">
      <div className="quiz">
        <div className="quiz-heading">
          {showResult ? <h2>Result page</h2> : <h2>Quiz page</h2>}
          {showResult ? (
            <div style={{display:'flex',color:'#1db954' ,flexDirection:'row'}}>
              <h3 style={{marginRight:'10px'}}>Completed</h3>
              <GrStatusGood fontSize={25} />

            </div>
          ) : (
            <h2>
              Question {activeQuestion + 1} /
              <span>{quizs?.questions?.length}</span>{" "}
            </h2>
          )}
        </div>

        <div>
          {!showResult ? (
            <div className="quiz-container">
              <h3>
                {activeQuestion + 1}. {question}
              </h3>
              {options.map((ans, index) => (
                <li
                  key={index}
                  onClick={() => handleClickAnswers(ans, index)}
                  className={
                    selectedAnswerIndex === index ? "li-selected" : "li-hover"
                  }
                >
                  <span>{ans}</span>
                </li>
              ))}
              {checked ? (
                <button onClick={nextQuestion} className="btn">
                  {activeQuestion === quizs?.questions?.length - 1
                    ? "Finish"
                    : "Next"}
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  disabled
                  className="btn-disabled"
                >
                  {activeQuestion === quizs?.questions?.length - 1
                    ? "Finish"
                    : "Next"}
                </button>
              )}
            </div>
          ) : (
            <div className="quiz-container result-page">
              <p>Total questions : {quizs.questions.length}</p>
              <p>
                Total Score : <span>{result.score}</span>
              </p>
              <p>
                Correct answers : <span>{result.correctAnswers}</span>
              </p>
              <p>
                Wrong answers : <span>{result.wrongAnswers}</span>
              </p>
              <Link href="/home">
                <button className="btn">Try again</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
