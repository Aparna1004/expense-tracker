"use client";
import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Login_form = () => {

  console.log(auth);

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[error,setError]=useState("");

  const router = useRouter();
  const  handlesubmit= async(e)=>{
      e.preventDefault();
      try{
        await signInWithEmailAndPassword(auth,email,password);
        console.log("user logged in successfully");
        // router.push('/dashboard');
      }
      catch(err){
        console.error(err);
        setError(err.message);
      }
  }
  return (
    <div className='h-screen flex justify-center items-center'>
    <div className='drop-shadow-2xl rounded-lg border-t-4 bg-gray-100 border-blue-600'>
      
      <form onSubmit={handlesubmit} className='flex flex-col gap-3 p-12 rounded-lg'>
        <div className='text-3xl font-bold'>LOGIN</div>
        <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value)}  className='bg-white rounded-md px-4 py-2 focus:outline-none hover:bg-gray-200 active:bg-gray-200'/>
        <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} className='bg-white rounded-md px-4 py-2 focus:outline-none hover:bg-gray-200 active:bg-gray-200'/>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-900 focus:outline">login</button>
        {error && <h1 className='bg-red-600 p-1 rounded-md text-white'>Invalid credentials</h1>}
        <h2>do you have an account? <a className="text-blue-600 hover:text-blue-300" href='/register'>Register</a></h2> 
      </form>
      
      </div>
    </div>
  )
}


export default  Login_form

