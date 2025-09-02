import connectDb from "@/dbConfig/dbConfig";
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";
//import jwt from "jsonwebtoken";

connectDb();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password, username } = reqBody;
        console.log(reqBody);

        //check if user already exist 
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ error: "user already exists" }, { status: 400 })
        }
        //hash pasword
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })
        const savedUser = await newUser.save();
        console.log(savedUser);


        //send verification Email:
        await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id })

        return NextResponse.json({
            message: "user created Successfully",
            success: true,
            savedUser
        })



    } catch (error: any) {
        console.log(error, "something went wrong ")
        return (NextResponse.json({
            error: error.message,
            status: 500
        }))

    }
}
