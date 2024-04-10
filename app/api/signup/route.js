import  dbConnect from '../../../db/mongodb'
import Users from '../../../models/user'
import { NextResponse } from 'next/server'
    import bcrypt from 'bcrypt';

export async function POST(req){
    try {
        await dbConnect()
    const {username,email,password} = await req.json()
    const user = await Users.findOne({username:username});
    if(user){
        return NextResponse.json({message : 'USer already exists'},{status: 400})
    }
    console.log(('user : ',user));
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('TItile : ',username);
    await Users.create({username,email,password:hashedPassword})
    return NextResponse.json({message : 'USer created'},{status: 200})
    } catch (error) {
        console.log(error);
    }
    
}