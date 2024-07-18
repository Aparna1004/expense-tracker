"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { auth, db } from '@/firebase';
import { setDoc, doc } from "firebase/firestore";
import { useRouter } from 'next/navigation'; // Correct import from next/navigation
import { toast } from "react-toastify";

const Register = () => {
    const [username, setUsername] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter(); // Initialize useRouter

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    username: username,
                    number: number,
                    role: "user"
                });
            }
            console.log("User registered successfully");
            toast.success("User registered successfully!", {
                position: "top-center",
            });
            router.push('/login'); // Redirect to login page after success
        } catch (err) {
            console.log(err.message);
            setError(err.message);
            toast.error(err.message, {
                position: "bottom-center",
            });
        }
    };

    return (
        <div className='h-screen flex justify-center items-center bg-gray-400'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-10 p-4 px-12 rounded-lg'>
                <div className='flex flex-col gap-6'>
                    <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} required />
                    <input type='tel' placeholder='Phone number' onChange={(e) => setNumber(e.target.value)} required />
                    <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
                    <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
                    <input type='submit' value='Register' />
                </div>
                <div>
                    {error && <h1 className="text-red-500">user already exists!</h1>}
                    <h2>Do you have an account? <a href='/login' className='text-blue-500 underline'>Login</a></h2>
                </div>
            </form>
        </div>
    );
};

export default Register;
