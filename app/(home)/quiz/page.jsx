"use client";

import React, { useState } from "react";
import { quiz } from "../../data";
import Link from "next/link";


const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const handleClickAnswers = (ans, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (ans === correctAnswer) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  const nextQuestion = () => {
    console.log(result);
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev?.score + 5,
            correctAnswers: prev?.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev?.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
      // console.log(result)
    } else {
      setActiveQuestion(0);

      setShowResult(true);
    }
    setChecked(false);
  };
  return (
    <div className="main">
      <div className="quiz">
        <div className="quiz-heading"> 
       {showResult? (<h2>Result page</h2>):(<h2>Quiz page</h2>)} 
          {showResult ? 'Quiz completed':<h2>
            Quesetion {activeQuestion + 1} /<span>{quiz.totalQuestions}</span>{" "}
          </h2>}
        </div>

        <div>
          {!showResult ? (
            <div className="quiz-container">
              
              <h3>{activeQuestion+1}.   {questions[activeQuestion].question}</h3>
              {answers.map((ans, index) => (
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
                  {activeQuestion === questions.length - 1 ? "Finsh" : "Next"}
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  disabled
                  className="btn-disabled"
                >
                  {activeQuestion === questions.length - 1 ? "Finsh" : "Next"}
                </button>
              )}
            </div>
          ) : (
            <div className="quiz-container result-page">
              
              {/* <h3>Over all : {result}%</h3> */}
              <p>Total questions : {questions.length}</p>
              <p>
                Total Score : <span>{result?.score}</span>
              </p>
              <p>
                Correct answers : <span>{result?.correctAnswers}</span>
              </p>
              <p>
                wrong answers : <span>{result?.wrongAnswers}</span>
              </p>
              <Link href='/home'><button className="btn">Try again</button></Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
