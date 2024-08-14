"use client";
import BudgetList from '@/Components/BudgetList';
import React from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from "react-icons/fa6";

function Budget() {
  const router = useRouter();
  // const user = useUser();
  // if(!user) router.replace('/login');

  return (
    <div className='p-4 sm:p-6 lg:p-10'>
      <div className='flex gap-3 items-center mb-4'>
        <FaArrowLeft className='text-xl sm:text-2xl lg:text-3xl cursor-pointer' onClick={() => router.back()} />
        <h2 className='font-bold text-xl sm:text-2xl lg:text-3xl'>My Budgets</h2>
      </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        <BudgetList />
      </div>
    </div>
  );
}

export default Budget;
