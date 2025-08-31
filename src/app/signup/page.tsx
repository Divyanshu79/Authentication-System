"use client"; //
import Link from "next/link";
import React, { useEffect } from 'react';
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";



export default function SignupPage(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });
    const [buttondisabled, setButtonDisabled] = React.useState(false);

    const [loading, setLoading] = React.useState(false);


    const onSignup = async () => {
        try {

            setLoading(true);
            const response = await axios.post("/api/users/signup", user);  // user post here
            console.log("Signup Success", response.data);
            router.push("/login");  // redirect to login
            toast.success("Signup Success");

        } catch (error: any) {
            console.log(error, "signup Failed:");
            toast.error(error.message);

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);

        } else {
            setButtonDisabled(true);
        }
    }, [user])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-4">

                <h2 className="text-2xl font-semibold text-center text-gray-800">{loading ? "processing" : " SignUp"}</h2>


                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">

                </label>

                <input type="email" value={user.email} id="email" placeholder="Write your email here" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" onChange={(e) => setUser({ ...user, email: e.target.value })} />

                <label htmlFor="password" className="block text-gray-700 font-medium mb-1"></label>

                <input type="password" value={user.password} id="password" placeholder="Write your password here" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" onChange={(e) => setUser({ ...user, password: e.target.value })} />

                <label htmlFor="username" className="block text-gray-700 font-medium mb-1"></label>

                <input type="text" value={user.username} id="username" placeholder="Write your username here" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" onChange={(e) => setUser({ ...user, username: e.target.value })} />

                <button type="button" onClick={onSignup} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 mx-3" >{buttondisabled ? "No signUp" : "signIn"}</button>

                <Link href="/login" className="text-blue-300 ">visit to login page</Link>
            </form>
        </div>
    )
}