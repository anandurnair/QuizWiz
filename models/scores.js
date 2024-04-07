import mongoose, { Schema } from "mongoose";
import Instructors from "./instructors";
import Users from "./user";
const scoreSchema = new Schema({
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Questions",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  totalQuestions : Number,
  correct:Number,
  wrong :Number,
  TotalScore : Number,
  createdAt : {
    type : Date,
    default : Date.now
  }
});

const Scores =
  mongoose.models.Scores || mongoose.model("Scores", scoreSchema);

export default Scores;
