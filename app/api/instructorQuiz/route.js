import  dbConnect from '../../../db/mongodb'
import Questions from '../../../models/questions'
import Instructors from '../../../models/instructors'
import { NextResponse } from 'next/server'

export async function POST(req){
    try{
  
      dbConnect()
      const {instructorName} = req.json()
      const instructor = await Instructors.find({instructorName})
      const quiz = await Questions.find({instructorId:instructor._id})
      console.log(quiz);
     return NextResponse.json({ quiz }, { status: 200 });
    }catch(err){
      return NextResponse.json({ message:'not found' }, { status: 400 });
    }
   
  }
