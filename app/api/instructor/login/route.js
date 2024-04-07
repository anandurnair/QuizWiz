import dbConnect from "@/db/mongodb";
import Instructors from "../../../../models/instructors";
import bcrypt from 'bcrypt';

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    dbConnect();
    const { instructorName, password } = await req.json();
    console.log('password ',password);
    console.log("TItile : ", instructorName);
    const instructor = await Instructors.findOne({ instructorName });
    const passwordsMatch = await bcrypt.compare(password, instructor.password);
    console.log("Is matched : ",passwordsMatch);
    if (
      instructorName === instructor.instructorName && passwordsMatch
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
