import  dbConnect from '../../../db/mongodb'
import Questions from '../../../models/questions'
import Instructors from '../../../models/instructors'
import { NextResponse } from 'next/server'

export async function POST(req){
     dbConnect()
    const {title,questions,currentInstructor} = await req.json()
    console.log(questions,currentInstructor);
    console.log("Titile",questions);
    const instructor = await Instructors.findOne({instructorName:currentInstructor})
    console.log(instructor);
    await Questions.create({instructorId:instructor._id,title : title ,questions:questions})
    return NextResponse.json({message : 'Question created'},{status: 201})
}

export async function GET(req){
    dbConnect()
    const questions = await Questions.find().populate('instructorId');
    console.log(questions);
   return NextResponse.json({ questions }, { status: 200 });

}
