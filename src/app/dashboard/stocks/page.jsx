"use client";
import TradingViewWidget from '@/Components/TradingViewChart'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

const Page = () => {

    const router = useRouter();

  return (
    <div className='p-10'>
        <div className='flex gap-2 items-center'>
        <FaArrowLeft className='text-3xl font-extrabold cursor-pointer' onClick={()=>router.back()}/>
        <h2 className='font-bold text-3xl'>Stocks</h2>
      </div>
      <TradingViewWidget/>
    </div>
  )
}

export default Page;
