"use client";
import React, { useEffect, useState } from 'react';
import { auth } from '@/firebase';
import { CardInfo } from '@/Components/CardInfo';
import { db } from '@/utils/dbConfig';
import { Budgets, Expense } from '@/utils/schema';
import { desc, eq, getTableColumns, sql } from 'drizzle-orm';

const Page = () => {
  const [budgetList, setBudgetList] = useState([]);

  useEffect(() => {
    if (auth && auth.currentUser) {
      getBudgetList();
    }
  }, [auth]);

  const getBudgetList = async () => {
    const result = await db.select({
      ...getTableColumns(Budgets),
      totalSpend: sql`sum(${Expense.amount})`.mapWith(Number),
      totalItem: sql`count(${Expense.id})`.mapWith(Number),
    }).from(Budgets)
      .leftJoin(Expense, eq(Budgets.id, Expense.budgetId))
      .where(eq(Budgets.createdBy, auth?.currentUser?.email))
      .groupBy(Budgets.id)
      .orderBy(desc(Budgets.id));

    setBudgetList(result);
  };

  return (
    <div className='p-8'>
      <h2 className='font-bold text-3xl'>Hi, {auth?.currentUser?.email ? auth?.currentUser?.email : "name"} ✌️</h2>
      <p className='text-gray-500'>Here's what's happening with your money, Let's manage your expense</p>
      {console.log("inside--PAGE",budgetList)}
      <CardInfo budgetList={budgetList} />
      <div className='grid grid-cols-1 md:grid-cols-3 mt-6'>
        <div className='md:col-span-2'>
            Chart
        </div>
        <div>
          Other Content 
        </div>
      </div>
    </div>
  );
}

export default Page;
