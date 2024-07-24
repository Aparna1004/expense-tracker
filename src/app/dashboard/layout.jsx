"use client";
import DashboardHeader from '@/Components/DashboardHeader';
import SideNav from '@/Components/SideNav';
import { db } from '@/utils/dbConfig';
import { Budgets } from '@/utils/schema';
import { auth } from '@/firebase';
import React, { useEffect } from 'react';
import { eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';

export default async function layout({children}) {

  const router=useRouter();

  useEffect(()=>{
    auth && checkUserBudgets();
  },[auth]);
  const checkUserBudgets= async() => {
    const result=await db.select().from(Budgets).where(eq(Budgets.createdBy,auth?.currentUser?.email))

    // console.log(result);
    // if(result?.length==0){
    //   router.replace("/dashboard/budgets")
    // } 
  }

  return (
    <div>
      <div className='fixed md:w-64 hidden md:block'>
      <SideNav/>
      </div>
      <div className='md:ml-64 '>
      <div><DashboardHeader/></div>  
        {children}
      </div>
    </div>
  )
}
