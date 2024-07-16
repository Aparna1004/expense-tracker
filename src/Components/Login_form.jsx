"use client";
import React from 'react';

function Login(){
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
}

const Login_form = () => {

    

  const  handlesubmit= async(e)=>{
      e.preventDefault();


      redirect("/dashboard")
  }




  return (
    <div className='h-screen flex justify-center items-center'>
    <div>
      
      <form className='flex flex-col gap-3 bg-gray-500 p-12 rounded-lg'>
         <h2 className='text-black text-center font-bold relative top-[-20px]'>LOGIN</h2>
        <input type="text" placeholder='Username'  className=''/>
        <input type="password" placeholder='Password' />
        <input type="submit" className='bg-blue-800 text-white rounded-lg hover:bg-green-700' a href='/Dashboard'/>
      
        <h2>do you have an account? <a href='/register' className=''>Register</a></h2> 
      </form>
      
      </div>
    </div>
  )
}


export default  Login_form

