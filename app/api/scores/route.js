import dbConnect from "../../../db/mongodb";
import Users from "../../../models/user";
import Scores from "@/models/scores";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    dbConnect();
    console.log("Score worked");
    const { username, quiz, total, totalScore, totalCorrect, totalWrong } =
      await req.json();
    console.log(
      "TItile : ",
      username,
      quiz,
      total,
      totalScore,
      totalCorrect,
      totalWrong
    );
    const user = await Users.findOne({ username });
    console.log("User : ", user);
    const updateObj = {
      questionId: quiz,
      userId: user._id,
      totalQuestions: total,
      correct: totalCorrect,
      wrong: totalWrong,
      TotalScore: totalScore,
    };
    await Scores.create(updateObj);
    return NextResponse.json({ message: "USer created" }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

export async function GET(req) {
  dbConnect();
  console.log('Working');
  const scores = await Scores.aggregate([
    {
      $group: {
        _id: { userId: "$userId", questionId: "$questionId" },
        totalScore: { $sum: "$TotalScore" },
      },
    },
  ]);
  
  const res = await Promise.all(scores.map(async (score) => {
    let user = await Users.findById(score._id.userId);
    return [user?.username, score.totalScore];
  }));
  console.log('result : ',res);
  return NextResponse.json({ }, { status: 200 });
}
