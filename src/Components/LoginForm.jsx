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

  const handleResetPassword = () =>{
    router.push("/reset");
  }

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
      <Loader content="Loading..." />
    </div>;
  }

  return (
    <div className='h-screen flex justify-center items-center p-4'>
      <div className='w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl drop-shadow-2xl rounded-lg border-t-4 bg-gray-100 border-blue-600 p-6'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div className='text-2xl sm:text-3xl font-bold text-center'>LOGIN</div>
          <input
            type="text"
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            className='bg-white rounded-md px-4 py-2 focus:outline-none hover:bg-gray-200 active:bg-gray-200 text-sm sm:text-base'
          />
          <input
            type="password"
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            className='bg-white rounded-md px-4 py-2 focus:outline-none hover:bg-gray-200 active:bg-gray-200 text-sm sm:text-base'
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none text-sm sm:text-base"
          >
            Login
          </button>
          {error && <h1 className='bg-red-600 p-2 rounded-md text-white text-center text-sm'>{error}</h1>}
          <p onClick={handleResetPassword} className='flex justify-end cursor-pointer'>Forgot Password ?</p>
          <h2 className='text-center text-sm sm:text-base'>Do you have an account? <a className="text-blue-600 hover:text-blue-300" href='/register'>Register</a></h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
