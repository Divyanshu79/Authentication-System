import connectDb from "@/dbConfig/dbConfig";
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

connectDb();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;
        console.log(reqBody);

        //check if user already exist 
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({
                error: "User does not Exist"
            },
                { status: 400 });
        }

        //compare password;
        const isCorrectPassword = bcrypt.compare(password, user.password);

        if (!isCorrectPassword) {
            NextResponse.json({ error: "Invalid Password" }, { status: 400 });
        }
        // create token data;
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }
        //Create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1h" })

        const response = NextResponse.json({
            message: "Login Successfully",
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true,
        })
        return response;



    } catch (error: any) {
        console.log(error, "something went wrong ")
        return (NextResponse.json({
            error: error.message,
            status: 500
        }))

    }
}
