"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState ,useEffect } from 'react';
import { auth, db } from '@/firebase';
import { setDoc, doc } from "firebase/firestore";
import { useRouter } from 'next/navigation'; // Correct import from next/navigation
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";

const Register = () => {

    const router = useRouter();
    const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
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
        <div className='h-screen flex justify-center items-center'>
            <div className='drop-shadow-2xl rounded-lg border-t-4 bg-gray-100 border-blue-600'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5 py-10 px-12 rounded-lg'>
              <div className='text-2xl font-bold'>REGISTER</div>
                <div className='flex flex-col gap-3'>
                    <input type='text' placeholder='Username'  className='bg-white rounded-md px-4 py-2 focus:outline-none hover:bg-gray-200 active:bg-gray-200' onChange={(e) => setUsername(e.target.value)} required />
                    <input type='tel' placeholder='Phone number'  className='bg-white rounded-md px-4 py-2 focus:outline-none hover:bg-gray-200 active:bg-gray-200' onChange={(e) => setNumber(e.target.value)} required />
                    <input type='email' placeholder='Email' className='bg-white rounded-md px-4 py-2 focus:outline-none hover:bg-gray-200 active:bg-gray-200' onChange={(e) => setEmail(e.target.value)} required />
                    <input type='password' placeholder='Password'  className='bg-white rounded-md px-4 py-2 focus:outline-none hover:bg-gray-200 active:bg-gray-200' onChange={(e) => setPassword(e.target.value)} required />
                    <input type='submit' value='Register' className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-900 focus:outline" />
                </div>
                <div>
                    {error && <h1 className="bg-red-500 text-white rounded-lg">user already exists!</h1>}
                    <h2>Do you have an account? <a href='/login' className='text-blue-600 hover:text-blue-300'>Login</a></h2>
                </div>
            </form>
            </div>
        </div>
    );
};

export default Register;