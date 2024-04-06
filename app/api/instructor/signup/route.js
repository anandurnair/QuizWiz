import  dbConnect from '../../../../db/mongodb'
import Instructors from '../../../../models/instructors'
import { NextResponse } from 'next/server'

export async function POST(req){
    try {
        await dbConnect()
    const {instructorName,email,password} = await req.json()
    console.log('TItile : ',instructorName);
    await Instructors.create({instructorName,email,password})
    return NextResponse.json({message : 'USer created'},{status: 200})
    } catch (error) {
        console.log(error);
    }
    
}