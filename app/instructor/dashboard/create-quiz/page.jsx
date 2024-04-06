'use client'
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const CreateQuiz = () => {
  const {currentInstructor} = useSelector(state => state.instructor)

  const [singleQuestion, setSingleQuestion] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correct: "",
  });
  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState(""); 
  const [isTitle, setIsTitle] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSingleQuestion((prevQuestion) => ({
      ...prevQuestion,
      [name]: value,
    }));
  };

  const handleNext = (e) => { 
    e.preventDefault();
    const newQuestion = {
      question: singleQuestion.question,
      options: [singleQuestion.option1, singleQuestion.option2, singleQuestion.option3, singleQuestion.option4],
      correct: singleQuestion.correct
    };
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
    setSingleQuestion({
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      correct: "",
    });
  };
  
  const handleCreateQuestion = (e) => {
    e.preventDefault();
    setIsTitle(true);
  }

  const handleFinish =async () => {
    if (!isTitle) {
      // If the title is not provided, don't finish
      return;
    }
  
    // Add the current question to the questions array
    const newQuestion = {
      question: singleQuestion.question,
      options: [singleQuestion.option1, singleQuestion.option2, singleQuestion.option3, singleQuestion.option4],
      correct: singleQuestion.correct
    };
  
    // Update the questions array
    await setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);

    try {
      const res = await fetch('http://localhost:3000/api/questions', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({title,questions,currentInstructor})
      });
      if(res.ok){
          console.log('Sucessfully ');
      }else{
          console.log('error');
      }
      
  } catch (error) {
      console.error('Error:', error);
  }
  
    // Clear the singleQuestion state
    setSingleQuestion({
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      correct: "",
    });
  };

 
  return (
    <div className="create-quiz">
      <h2>Create quiz</h2>
      <div className="create-box">
        <h2>Create quiz</h2>
        <div className="create-inputs">
          {!isTitle ? (
            <div className="title-input">
              <label htmlFor="title">Enter Title</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          ) : (
            <>
              <div className="title-input">
                <label htmlFor="question">Enter Question</label>
                <input
                  type="text"
                  name="question"
                  value={singleQuestion.question}
                  onChange={handleChange}
                />
              </div>
              <div className="title-input">
                <label htmlFor="option1">Option 1</label>
                <input
                  type="text"
                  name="option1"
                  value={singleQuestion.option1}
                  onChange={handleChange}
                />
              </div>
              <div className="title-input">
                <label htmlFor="option2">Option 2</label>
                <input
                  type="text"
                  name="option2"
                  value={singleQuestion.option2}
                  onChange={handleChange}
                />
              </div>
              <div className="title-input">
                <label htmlFor="option3">Option 3</label>
                <input
                  type="text"
                  name="option3"
                  value={singleQuestion.option3}
                  onChange={handleChange}
                />
              </div>
              <div className="title-input">
                <label htmlFor="option4">Option 4</label>
                <input
                  type="text"
                  name="option4"
                  value={singleQuestion.option4}
                  onChange={handleChange}
                />
              </div>
              <div className="title-input">
                <label htmlFor="correct">Correct answer</label>
                <select
                  name="correct"
                  value={singleQuestion.correct}
                  onChange={handleChange}
                >
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                </select>
              </div>
            </>
          )}
          <div className="create-btns">
           { !isTitle ? <button onClick={handleCreateQuestion}>Next</button> : ( <><button onClick={handleNext}>Next</button>
            <button onClick={handleFinish}>Finish</button></>) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
