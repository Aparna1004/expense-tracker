"use client";
import TradingViewWidget from '@/Components/TradingViewChart';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

const Page = () => {

    const router = useRouter();

  return (
    <div className='p-4 sm:p-6 lg:p-8'>
      <div className='flex gap-2 items-center mb-4'>
        <FaArrowLeft className='text-2xl sm:text-3xl font-extrabold cursor-pointer' onClick={() => router.back()} />
        <h2 className='font-bold text-xl sm:text-2xl lg:text-3xl'>Stocks</h2>
      </div>
      <div className='w-full h-auto'>
        <TradingViewWidget />
      </div>
    </div>
  );
}

export default Page;
