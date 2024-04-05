import dbConnect from "@/db/mongodb";

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();
    const { instructorName, password } = await req.json();
    console.log("TItile : ", instructorName);
    const preUsername= 'admin123'
    const prePassword = '123'
    if( instructorName === preUsername && password ===  prePassword ){
        console.log('Valid password');
        return NextResponse.json({ message: "instructor created" }, { status: 200 });
    }else{
        return NextResponse.json({ message: "USer created" }, { status: 405 });

    }
  } catch (error) {
    console.log(error);
  }
}