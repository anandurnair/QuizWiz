'use client'
import React, { useState } from "react";

const CreateQuiz = () => {
  const [questions, setQuestions] = useState({
    title: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correct: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestions(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFinish = () => {
    console.log('hi');
    console.log(questions);
    fetch('http://localhost:3000/api/questions',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(questions)
    })
  };

  return (
    <div className="create-quiz">
      <h2>Create quiz</h2>
      <div className="create-box">
        <h2>Create quiz</h2>
        <div className="create-inputs">
            <div className="title-input">
                <label htmlFor="title">Enter Title</label>
                <input type="text" name="title" onChange={handleChange} />
            </div>
          <div className="title-input">
            <label htmlFor="question">Enter Question</label>
            <input type="text" name="question" onChange={handleChange} />
          </div>
          <div className="title-input">
            <label htmlFor="option1">Option 1</label>
            <input type="text" name="option1" onChange={handleChange} />
          </div>
          <div className="title-input">
            <label htmlFor="option2">Option 2</label>
            <input type="text" name="option2" onChange={handleChange} />
          </div>
          <div className="title-input">
            <label htmlFor="option3">Option 3</label>
            <input type="text" name="option3" onChange={handleChange} />
          </div>
          <div className="title-input">
            <label htmlFor="option4">Option 4</label>
            <input type="text" name="option4" onChange={handleChange} />
          </div>
          <div className="title-input">
            <label htmlFor="correct">Correct answer</label>
            <input type="text" name="correct" onChange={handleChange} />
          </div>
          <div className="create-btns">
            <button>Next</button>
            <button onClick={handleFinish}>Finish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
