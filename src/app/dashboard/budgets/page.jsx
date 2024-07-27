"use client";
import BudgetList from '@/Components/BudgetList'
import React from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/lib/auth';
import { FaArrowLeft } from "react-icons/fa6";

function Budget() {
  const router = useRouter();
  // const user = useUser();
  // if(!user) router.replace('/login');


  return (
    <div className='p-10'>
      <div className='flex gap-2 items-center'>
        <FaArrowLeft className='text-3xl font-extrabold cursor-pointer' onClick={()=>router.back()}/>
        <h2 className='font-bold text-3xl'>My Budgets</h2>
      </div>
      <BudgetList/>
    </div>
  )
}

export default Budget
