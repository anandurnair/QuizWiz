import  dbConnect from '../../../../db/mongodb'
import Instructors from '../../../../models/instructors'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt';

export async function POST(req){
    try {
        await dbConnect()
    const {instructorName,email,password} = await req.json()
    console.log('TItile : ',instructorName);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Instructors.findOne({instructorName:instructorName});
    if(user){
        return NextResponse.json({message : 'Instructor already exists'},{status: 400})
    }
    await Instructors.create({instructorName,email,password:hashedPassword})
    return NextResponse.json({message : 'USer created'},{status: 200})
    } catch (error) {
        console.log(error);
    }
    
}