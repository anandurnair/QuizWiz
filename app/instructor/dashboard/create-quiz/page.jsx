"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { GrStatusGood } from "react-icons/gr";

const CreateQuiz = () => {
  const [updateData,setUpdateData] = useState(false)
  const [currentInstructor, setCurrentInstructor] = useState();

  useEffect(()=>{
    if(updateData){
      const postData = async () => {
        console.log("Questions : ", questions);
        try {
          const res = await fetch("http://localhost:3000/api/questions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, questions, currentInstructor }),
          });
          if (res.ok) {
            alert('Succussfully inserted')
            router.push("/instructor/dashboard");
          } else {
            console.log("Error occurred while saving");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
      postData();
    }
  },[updateData])
  useEffect(() => {
    setCurrentInstructor(sessionStorage.getItem("currentInstructor"));
  }, []);
  const router = useRouter();
  const [singleQuestion, setSingleQuestion] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correct: 1,
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
    if (
      singleQuestion.question != "" &&
      singleQuestion.option1 != "" &&
      singleQuestion.option2 != "" &&
      singleQuestion.option3 != "" &&
      singleQuestion.option4 != ""
    ) {
      e.preventDefault();
      console.log("Length : ", questions.length);
      const newQuestion = {
        question: singleQuestion.question,
        options: [
          singleQuestion.option1,
          singleQuestion.option2,
          singleQuestion.option3,
          singleQuestion.option4,
        ],
        correct: singleQuestion.correct,
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
    } else {
      alert("Please fill the question");
    }
  };

  const handleCreateQuestion = (e) => {
    e.preventDefault();
    setIsTitle(true);
  };

  const handleFinish = async () => {
    if (!isTitle) {
      return;
    }

    const newQuestion = {
      question: singleQuestion.question,
      options: [
        singleQuestion.option1,
        singleQuestion.option2,
        singleQuestion.option3,
        singleQuestion.option4,
      ],
      correct: singleQuestion.correct,
    };

    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);

    setUpdateData(true)

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
    <div className="main">
      <h2>Create quiz</h2>
      <div className="quiz">
        <div className="create-quiz-heading">
          {" "}
          <h2>Create quiz</h2>
        </div>

        <div className="create-inputs">
          {!isTitle ? (
            <div className="title-input">
              <label htmlFor="title">Enter Title</label>
              <input
                placeholder="Enter quiz title"
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          ) : (
            <>
              <h2>Question no : {questions.length + 1}</h2>
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
            {!isTitle ? (
              <button className="btn" onClick={handleCreateQuestion}>
                Next
              </button>
            ) : (
              <>
                <button className="btn" onClick={handleNext}>
                  Next
                </button>
                <button className="btn" onClick={handleFinish}>
                  Finish
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
