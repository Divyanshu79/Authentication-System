"use client"; //
import Link from "next/link";
import React from 'react';
import { useRouter } from "next/navigation";
import axios from "axios";





export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });

    const onLogin = async () => {

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form action="" className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-4">

                <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>


                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">

                </label>

                <input type="email" value={user.email} id="email" placeholder="Write your email here" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" onChange={(e) => setUser({ ...user, email: e.target.value })} />

                <label htmlFor="password" className="block text-gray-700 font-medium mb-1"></label>

                <input type="password" value={user.password} id="password" placeholder="Write your password here" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black" onChange={(e) => setUser({ ...user, password: e.target.value })} />

                <label htmlFor="username" className="block text-gray-700 font-medium mb-1"></label>



                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300">Signup</button>

                <Link href="/signup" className="text-blue-300 m-3 ">Not a user</Link>
            </form>
        </div>
    )
}