import  dbConnect from '../../../db/mongodb'
import Users from '../../../models/user'
import { NextResponse } from 'next/server'

export async function POST(req){
    try {
        await dbConnect()
    const {username,email,password} = await req.json()
    console.log('TItile : ',username);
    await Users.create({username,email,password})
    return NextResponse.json({message : 'USer created'},{status: 200})
    } catch (error) {
        console.log(error);
    }
    
}