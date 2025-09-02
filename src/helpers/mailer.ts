import nodemailer from "nodemailer";
import User from '@/models/userModel';
import bcrypt from "bcryptjs";


export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        //create hash token
        const hashedToken = bcrypt.hash(userId.toString(), 10)


        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000
            })
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now() + 3600000
            })
        }

        // Looking to send emails in production? Check out our Email API/SMTP product!
        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: process.env.USER!,
                pass: process.env.PASSWORD!
                //TODO
            }
        });

        const mailOptions = {
            from: 'divyanshur934@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? "Verify youor email" : "Reset your Password",

            html: `<p> Click <a href="${process.env.domain!}/verifyemail?token${hashedToken}" >  here <a/> to ${emailType === "VERIFY" ? "verify your email" : "reset your Password"}  </p>`
        }
        const mailresponse = await transport.sendMail(mailOptions);
        return mailresponse;



    } catch (error: any) {
        console.log(error);

    }
}