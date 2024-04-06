import dbConnect from "../../../db/mongodb";
import Questions from "../../../models/questions";
import Instructors from "../../../models/instructors";
import { NextResponse } from "next/server";
const { ObjectId } = require("mongodb");
var mongoose = require("mongoose");

export async function POST(req) {
  try {
    const { quizId } = await req.json();
    console.log("working");
    console.log("Query : ", quizId);
    let quiz;
    if (quizId !== "") {
      quiz = await Questions.findById(quizId);
    }
    console.log("Quiz : ", quiz);
    return NextResponse.json({ quiz }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Failed to fetch" }, { status: 400 });
  }

  // try {
  //     dbConnect()

  //     const { quizId } = req.query;
  //     console.log("Quiz id :",quizId);

  //     const quiz = await Questions.findOne({_id:new ObjectId(quizId)})
  //     console.log( "Quiz : ",quiz);
  // } catch (error) {
  //
}
