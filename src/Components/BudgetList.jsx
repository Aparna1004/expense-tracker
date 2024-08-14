"use client";
import React, { useEffect, useState } from 'react';
import CreateBudget from '@/Components/CreateBudget';
import { db } from '@/utils/dbConfig';
import { getTableColumns, eq, sql, desc } from 'drizzle-orm';
import { auth } from '@/firebase';
import { Budgets, Expense } from '@/utils/schema';
import BudgetItem from './BudgetItem';

function BudgetList() {
  const [budgetList, setBudgetList] = useState(null);

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
      .groupBy(Budgets.id).orderBy(desc(Budgets.id));

    setBudgetList(result);
  };

  return (
    <div className='mt-7'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
        <CreateBudget refreshData={getBudgetList()} />
        {(budgetList?.length>0)?budgetList.map((budget,index) => (
          <BudgetItem budget={budget} key={index}/>
        )):[1,2,3,4,6,6].map((value,index)=>(
          <div key={index} className='bg-slate-200 animate-pulse'></div>
        ))}
      </div>
    </div>
  );
}

export default BudgetList;
