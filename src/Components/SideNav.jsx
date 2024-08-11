"use client";
import React, { useEffect } from 'react'
import { LayoutGrid ,PiggyBank,ReceiptText,TrendingUp,Brain} from 'lucide-react'
import logo from "@/Images/logo.svg";
import Image from 'next/image';
import Link from 'next/link';
//import { useSearchParams } from 'next/navigation'

function SideNav() {
  const menuList=[
  {
    id:1,
    name:'Dashboard',
    icon:LayoutGrid,
    path:'/dashboard'
  },
  {
    id:2,
    name:'Budgets',
    icon:PiggyBank,
    path:'/dashboard/budgets'

  },
  {
    id:3,
    name:'Expenses',
    icon:ReceiptText,
    path:'/dashboard/expenses'
  },
  {
    id:4,
    name:'Stocks',
    icon:TrendingUp,
    path:'/dashboard/stocks'
  },
  {
    id:5,
    name:'AI',
    icon:Brain,
    path:'/dashboard/AI'
  }
]
//const path=usePathname();

// useEffect(() => {
//   console.log(path)
// },[])

  return (
    <div className='h-screen p-5 border shadow-sm  border-r-2'>
      <div className='flex items-center gap-4'>
      <svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" class="ccompli1" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" class="ccustom" fill="#312ECB"></path> </svg>
        <h2 className='font-extrabold text-2xl'>
        TrackIt
      </h2>
      </div>
      <div className='mt-5'>
            {menuList.map((menu)=>(
              <Link href={menu.path} key={menu.id}>
                <h2 className='flex gap-2 items-center text-gray-500 font-medium mb-2 p-5 
                  cursor-pointer rounded-md hover:text-primary hover:bg-blue-100'>
                  <menu.icon/>
                  {menu.name}
                </h2>
              </Link>
             ))}
      </div>
    </div>
  )
}

export default SideNav
