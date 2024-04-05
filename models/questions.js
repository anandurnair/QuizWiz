import mongoose, { Schema } from "mongoose";

const questionsSchema = new Schema({
  title: String,
  question: String,
  option1: String,
  option2: String,
  option3: String,
  option4: String,
  correct: String,
});

const Questions = mongoose.models.Questions || mongoose.model("Questions", questionsSchema);

export default Questions;
