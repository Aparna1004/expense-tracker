"use client";
import React, { useEffect } from 'react'
import { LayoutGrid ,PiggyBank,ReceiptText} from 'lucide-react'
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
  }
]
//const path=usePathname();

// useEffect(() => {
//   console.log(path)
// },[])

  return (
    <div className='h-screen p-5 border-shadow-sm w-1/5 border-r-2'>
      <div className='flex items-center gap-4'><Image src={logo}
      alt='logo' 
      width={60}
      height={50}
      /><h2 className=''>
        aparna
      </h2>
      </div>
      <div className='mt-5'>
            {menuList.map((menu,index)=>(
              <Link href={menu.path}>
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
