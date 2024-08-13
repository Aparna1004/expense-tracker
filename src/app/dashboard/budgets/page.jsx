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
        <FaArrowLeft className='text-2xl sm:text-3xl cursor-pointer' onClick={() => router.back()} />
        <h2 className='font-bold text-2xl sm:text-3xl'>My Budgets</h2>
      </div>
      <BudgetList />
    </div>
  );
}

export default Budget;
