"use client";
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState, useEffect, useCallback } from 'react';
import { auth } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useAuthState } from "react-firebase-hooks/auth";
import { Loader } from 'rsuite';

const LoginForm = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
      router.replace('/dashboard');
      console.log(auth.currentUser.email);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  }, [email, password, router]);

  if (loading) {
    return <div className='h-screen flex justify-center items-center bg-slate-50'>
    </div>;
  }

  return (
    <div className='h-screen flex justify-center items-center bg-slate-50'>
      <div className='drop-shadow-2xl rounded-lg border-t-4 bg-gray-100 border-blue-600'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 p-12 rounded-lg'>
          <div className='text-3xl font-bold'>LOGIN</div>
          <input
            type="text"
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            className='bg-white rounded-md px-4 py-2 focus:outline-none hover:bg-gray-200 active:bg-gray-200'
          />
          <input
            type="password"
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            className='bg-white rounded-md px-4 py-2 focus:outline-none hover:bg-gray-200 active:bg-gray-200'
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-900 focus:outline-none"
          >
            Login
          </button>
          {error && <h1 className='bg-red-600 p-1 rounded-md text-white'>Invalid credentials</h1>}
          <h2>Do you have an account? <a className="text-blue-600 hover:text-blue-300" href='/register'>Register</a></h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
