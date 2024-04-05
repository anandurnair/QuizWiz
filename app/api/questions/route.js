import  dbConnect from '../../../db/mongodb'
import Questions from '../../../models/questions'
import { NextResponse } from 'next/server'

export async function POST(req){
    await dbConnect()
    const {title,question,option1,option2,option3,option4,correct} = await req.json()
    console.log('TItile : ',title);
    await Questions.create({title,question,option1,option2,option3,option4,correct})
    return NextResponse.json({message : 'Question created'},{status: 201})
}