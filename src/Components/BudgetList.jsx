"use client";
import React, { useEffect } from 'react'
import CreateBudget from '@/Components/CreateBudget';
import { db } from '@/utils/dbConfig';
import { getTableColumns,eq,sql } from 'drizzle-orm';
import { auth } from '@/firebase';
import { Budgets, Expense } from '@/utils/schema';

function BudgetList() {

  useEffect(()=>{
    auth && getBudgetList();
  },[auth]);

  const  getBudgetList = async () =>{
    const result = await db.select({
      ...getTableColumns(Budgets),
      totalSpend:sql `sum(${Expense.amount})`.mapWith(Number),
      totalItem:sql `count(${Expense.id})`.mapWith(Number),
    }).from(Budgets).leftJoin(Expense,eq(Budgets.id,Expense.budgetId)).where(eq(Budgets.createdBy,auth?.currentUser?.email)).groupBy(Budgets.id);

    console.log(result);
  }

  return (
    <div className='mt-7'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
     <CreateBudget/>
     </div>
    </div>
  )
}

export default BudgetList
