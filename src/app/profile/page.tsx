'use client'; // Only for App Router
import Image from 'next/image'; // Adjust the path as necessary

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhoneAlt,
} from 'react-icons/fa';

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex items-center justify-center p-6">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl p-8 md:p-12 flex flex-col md:flex-row gap-8">

                {/* Profile Image */}
                <div className="flex-shrink-0 flex flex-col items-center md:items-start">
                    <img
                        src="/image.png"
                        alt="Profile"
                        className="w-40 h-40 rounded-full border-4 border-indigo-300 shadow-lg"
                    />
                    <div className="mt-4 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-gray-800">Divyanshu Kumar</h2>
                        <p className="text-sm text-indigo-600 font-semibold">Full Stack Developer</p>
                    </div>
                </div>

                {/* Info */}
                <div className="flex-1 space-y-4 text-gray-700">
                    <p className="text-md">
                        👋 Hi, I'm Divyanshu — a passionate Full Stack Developer skilled in building modern web applications using MERN stack, Tailwind CSS, and more. I love solving real-world problems with clean and efficient code.
                    </p>

                    {/* Contact Info */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex items-center gap-2">
                            <FaEnvelope className="text-indigo-500" />
                            <span>divyanshur934@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt className="text-indigo-500" />
                            <span>+91 7902139909</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-indigo-500" />
                            <span>Amroha, Uttar Pradesh</span>
                        </div>
                    </div>

                    {/* Skills */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Tailwind', 'HTML', 'CSS', 'Python', 'Git'].map((skill) => (
                                <span key={skill} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-6">
                        <a
                            href="mailto:divyanshur934@gmail.com"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow transition"
                        >
                            Contact Me
                        </a>
                        <a
                            href="https://github.com/Divyanshu79"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-gray-800 hover:bg-black text-white px-6 py-2 rounded-full shadow transition"
                        >
                            GitHub
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 text-xl mt-4 text-gray-600">
                        <a href="https://github.com/Divyanshu79" target="_blank" rel="noreferrer">
                            <FaGithub className="hover:text-black transition" />
                        </a>
                        <a href="https://linkedin.com/in/techie-divyanshu" target="_blank" rel="noreferrer">
                            <FaLinkedin className="hover:text-blue-600 transition" />
                        </a>
                        <a href="mailto:divyanshur934@gmail.com">
                            <FaEnvelope className="hover:text-red-500 transition" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
