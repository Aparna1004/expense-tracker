"use client";
import React from 'react'
import { LayoutGrid, PiggyBank, ReceiptText, TrendingUp, Brain } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';

function SideNav() {
  const menuList = [
    { id: 1, name: 'Dashboard', icon: LayoutGrid, path: '/dashboard' },
    { id: 2, name: 'Budgets', icon: PiggyBank, path: '/dashboard/budgets' },
    { id: 3, name: 'Expenses', icon: ReceiptText, path: '/dashboard/expenses' },
    { id: 4, name: 'Stocks', icon: TrendingUp, path: '/dashboard/stocks' },
    { id: 5, name: 'AI', icon: Brain, path: '/dashboard/AI' }
  ];

  return (
    <div className='h-screen p-5 border shadow-sm border-r-2 bg-white lg:w-64 w-16'>
      <div className='flex items-center gap-4 mb-5'>
        <svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF"></path>
          <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" className="ccustom" fill="#312ECB"></path>
        </svg>
        <h2 className='font-extrabold text-xl lg:text-2xl hidden lg:block'>
          TrackIt
        </h2>
      </div>
      <div className='flex flex-col mt-5'>
        {menuList.map((menu) => (
          <Link href={menu.path} key={menu.id} className='flex items-center gap-2 mb-2 p-3 rounded-md hover:text-primary hover:bg-blue-100'>
            <menu.icon className='text-lg lg:text-xl' />
            <span className='hidden lg:inline'>{menu.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideNav;
