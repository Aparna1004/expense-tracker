"use client";

import { db } from '@/utils/dbConfig';
import { Budgets, Expense } from '@/utils/schema';
import { getTableColumns, eq, sql, desc } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { auth } from '@/firebase';
import BudgetItem from '@/Components/BudgetItem';
import AddExpense from '@/Components/AddExpense';

const Page = ({ params }) => {
  const [budgetInfo, setBudgetInfo] = useState(null);

  useEffect(() => {
    if (auth?.currentUser) {
      getBudgetInfo();
    }
  }, [auth?.currentUser]);

  const getBudgetInfo = async () => {
    try {
      const result = await db.select({
        ...getTableColumns(Budgets),
        totalSpend: sql`sum(${Expense.amount})`.mapWith(Number),
        totalItem: sql`count(${Expense.id})`.mapWith(Number),
      })
        .from(Budgets)
        .leftJoin(Expense, eq(Budgets.id, Expense.budgetId))
        .where(eq(Budgets.createdBy, auth.currentUser.email))
        .where(eq(Budgets.id, params.id))
        .groupBy(Budgets.id)
        .orderBy(desc(Budgets.id));

      setBudgetInfo(result[0]);
      console.log(result[0]);
    } catch (error) {
      console.error("Error fetching budget info:", error);
    }
  };

  return (
    <div className='p-10'>
      <h2 className='text-2xl font-bold'>My Expenses</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-6 gap-5'>
        {(budgetInfo) ? <BudgetItem budget={budgetInfo} />:
        <div className=" h-[150px] w-full bg-slate-200 rounded-lg animate-pulse"></div>}
        <AddExpense/>
      </div>
    </div>
  );
};

export default Page;
