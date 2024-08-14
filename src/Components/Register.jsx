"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from 'react';
import { auth, db } from '@/firebase';
import { setDoc, doc } from "firebase/firestore";
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";

const Register = () => {

    const router = useRouter();
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            router.push("/login");
        }
    }, [user]);

    const [username, setUsername] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
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
        <div className='h-screen flex justify-center items-center bg-gray-50 p-4'>
            <div className='w-full max-w-md drop-shadow-2xl rounded-lg border-t-4 bg-gray-100 border-blue-600 p-6'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <div className='text-2xl font-bold text-center'>REGISTER</div>
                    <div className='flex flex-col gap-3'>
                        <input
                            type='text'
                            placeholder='Username'
                            className='bg-white rounded-md px-4 py-2 focus:outline-none hover:bg-gray-200 active:bg-gray-200'
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type='tel'
                            placeholder='Phone number'
                            className='bg-white rounded-md px-4 py-2 focus:outline-none hover:bg-gray-200 active:bg-gray-200'
                            onChange={(e) => setNumber(e.target.value)}
                            required
                        />
                        <input
                            type='email'
                            placeholder='Email'
                            className='bg-white rounded-md px-4 py-2 focus:outline-none hover:bg-gray-200 active:bg-gray-200'
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            className='bg-white rounded-md px-4 py-2 focus:outline-none hover:bg-gray-200 active:bg-gray-200'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type='submit'
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
                        >
                            Register
                        </button>
                    </div>
                    <div className='text-center'>
                        {error && <h1 className="bg-red-500 text-white p-2 rounded-lg">{error}</h1>}
                        <h2 className='mt-4'>Do you have an account? <a href='/login' className='text-blue-600 hover:text-blue-400'>Login</a></h2>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
