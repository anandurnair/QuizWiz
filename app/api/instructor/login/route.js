import dbConnect from "@/db/mongodb";
import Instructors from "../../../../models/instructors";

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    dbConnect();
    const { instructorName, password } = await req.json();
    console.log("TItile : ", instructorName);
    const instructor = await Instructors.findOne({ instructorName });
    console.log(instructor);
    if (
      instructorName === instructor.instructorName &&
      password === instructor.password
    ) {
      console.log("Valid password");
      return NextResponse.json(
        { message: "instructor created" },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ message: "USer created" }, { status: 405 });
    }
  } catch (error) {
    console.log(error);
  }
}
