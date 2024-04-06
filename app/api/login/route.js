import dbConnect from "../../../db/mongodb";
import Users from "../../../models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();
    const { username, password } = await req.json();
    console.log("TItile : ", username);
    const user = await Users.findOne({ username });
    console.log(user.password);
    if (user.password === password) {
      console.log("Valid password");
      return NextResponse.json({ message: "USer created" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "USer created" }, { status: 405 });
    }
  } catch (error) {
    console.log(error);
  }
}
