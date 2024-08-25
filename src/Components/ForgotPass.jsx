"use client";

import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase";  // Import the correct auth instance
import { useRouter } from "next/navigation";

function ForgotPassword() {
    const router = useRouter();
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);  // Use the auth instance here
            alert("Check your email for further instructions.");
            router.back();
        } catch (error) {
            alert(`Error: ${error.message}`);  // Improved error handling to show the message
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Forgot Password
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
