"use client";
import { redirect } from 'next/dist/server/api-utils';
import React ,{useState} from 'react';

const Register = () => {

    

    const  handlesubmit= async(e)=>{
        e.preventDefault();


        redirect("/login")
    }

  

  return (
    <div className='h-screen flex justify-center items-center bg-gray-400'>
      <form onSubmit={handlesubmit} className='flex flex-col gap-10 p-4 px-12 rounded-lg '>
        <div className='flex flex-col gap-6'>
        <input type='text' placeholder='Username' onChange={(i)=>setUsername(i.target.value)} required />
        <input type='phone' placeholder='phone number' onChange={(f)=>setNumber(f.target.value)} required/>
        <input type="email" placeholder='email' onChange={(g)=>setEmail(g.target.value)} required/>
        <input type='password' placeholder='Password' onChange={(h)=>setPassword(h.target.value)} required/>
        <input type='submit'/>
    </div>
    <div>
        <h2>Do you have an account! <a href='/login'>login</a></h2>
    </div>
      </form>
    </div>
  )
}

export default Register
