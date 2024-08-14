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
    <div className='mt-7 p-4 sm:p-6 lg:p-8'>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        <CreateBudget refreshData={getBudgetList} />
        {budgetList?.length > 0 ? (
          budgetList.map((budget, index) => (
            <BudgetItem budget={budget} key={index} />
          ))
        ) : (
          [1, 2, 3, 4, 5, 6].map((_, index) => (
            <div key={index} className='bg-slate-200 rounded-lg p-5 h-[170px] animate-pulse'></div>
          ))
        )}
      </div>
    </div>
  );
}

export default BudgetList;
