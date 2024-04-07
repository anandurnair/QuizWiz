import dbConnect from "../../../db/mongodb";
import Users from "../../../models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export async function POST(req) {
  try {
    await dbConnect();
    const { username, password } = await req.json();
    console.log("TItile : ", username);
    const user = await Users.findOne({ username });
    console.log(user.password);
    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (passwordsMatch) {
      console.log("Valid password");
      return NextResponse.json({ message: "USer created" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "USer created" }, { status: 405 });
    }
  } catch (error) {
    console.log(error);
  }
}
