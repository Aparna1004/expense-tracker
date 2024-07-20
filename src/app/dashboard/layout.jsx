"use client";
import DashboardHeader from '@/Components/DashboardHeader';
import SideNav from '@/Components/SideNav';
import { db } from '@/utils/dbConfig';
import { Budgets } from '@/utils/schema';
import { auth } from '@/firebase';
// import {eq} from ""
import React, { useEffect } from 'react';
import { eq } from 'drizzle-orm';

export default async function layout({children}) {



  useEffect(()=>{
    auth&&checkUserBudgets();
  },[auth]);
  const checkUserBudgets= async() => {
    const result=await db.select().from(Budgets).where(eq(Budgets.createdBy,auth?.currentUser?.email))

    console.log(result);
  }

  return (
    <div className='flex'>
      <SideNav/>
      <div className='flex flex-col grow'>
      <div><DashboardHeader/></div>  
        {children}
      </div>
    </div>
  )
}
