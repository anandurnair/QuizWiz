import mongoose, { Schema } from "mongoose";
import Instructors from "./instructors";
const questionsSchema = new Schema({
  instructorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Instructors",
    required: true,
  },
  title: String,
  questions: [
    {
      question: String,
      options: [String],
      correct: {
        type : Number,
        default : 1
      }
    },
  ],
  createdAt : {
    type : Date,
    default : Date.now
  }
});

const Questions =
  mongoose.models.Questions || mongoose.model("Questions", questionsSchema);

export default Questions;
