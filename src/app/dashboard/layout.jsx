"use client";
import DashboardHeader from '@/Components/DashboardHeader'
import SideNav from '@/Components/SideNav'
import { db } from '@/utils/dbConfig';
import { Budgets } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react'

export default async function layout({children}) {

  useEffect(()=>{
    checkUserBudgets();
  },[]);
  const checkUserBudgets= async() => {
    const result=await db.select().from(Budgets).where(eq(Budgets.createdBy,))
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
