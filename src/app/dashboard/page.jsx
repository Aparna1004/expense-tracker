"use client";
import React, { useEffect,useCallback, useState } from 'react';
import { auth } from '@/firebase';
import { CardInfo } from '@/Components/CardInfo';
import { db } from '@/utils/dbConfig';
import { Budgets, Expense } from '@/utils/schema';
import { desc, eq, getTableColumns, sql } from 'drizzle-orm';
import BarChartDashboard from '@/Components/BarChartDashboard';
import BudgetItem from '@/Components/BudgetItem';
import ExpenseList from '@/Components/ExpenseList';
import { useAuthState } from "react-firebase-hooks/auth";

const Page = () => {
  
  const [user] = useAuthState(auth);
  const [budgetList, setBudgetList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);
  console.log(user);

  //useEffect(() => {
   // user && getBudgetList();
  //}, [user,getBudgetList]);

  const getBudgetList = useCallback(async () => {
      if(!user) return;
      const result = await db.select({
        ...getTableColumns(Budgets),
        totalSpend: sql`sum(${Expense.amount})`.mapWith(Number),
        totalItem: sql`count(${Expense.id})`.mapWith(Number),
      }).from(Budgets)
        .leftJoin(Expense, eq(Budgets.id, Expense.budgetId))
        .where(eq(Budgets.createdBy, user?.email))
        .groupBy(Budgets.id)
        .orderBy(desc(Budgets.id));

      setBudgetList(result);
      console.log("here");
      getAllExpenses();
  },[user]);

  const getAllExpenses =useCallback( async () => {
      if(!user) return;
      const result = await db.select({
        id: Expense.id,
        name: Expense.name,
        amount: Expense.amount,
        createdBy: Expense.createdAt
      }).from(Budgets)
        .rightJoin(Expense, eq(Budgets.id, Expense.budgetId))
        .where(eq(Budgets.createdBy, user?.email))
        .orderBy(desc(Expense.id));
      setExpensesList(result);
      console.log("----expensem",result);
  },[user]);

  useEffect(() => {
    if (user) {
      getBudgetList();
    }
  }, [user, getBudgetList]);


  return (
    <div className='p-8'>
      <h2 className='font-bold text-3xl'>Hi, {user?.email ? user?.email : "name"} ✌️</h2>
      <p className='text-gray-500'>Here&#39;s what&#39;s happening with your money, Let&#39;s manage your expense</p>
      {console.log("inside--PAGE", budgetList)}
      <CardInfo budgetList={budgetList} />
      <div className='grid grid-cols-1 md:grid-cols-3 mt-6 gap-5'>
        <div className='md:col-span-2'>
          <BarChartDashboard
            budgetList={budgetList} />
          <ExpenseList expensesList={expensesList} refreshData={()=>getBudgetList()}/>
        </div>
        <div className='grid gap-3'>
          <h2 className='font-bold text-lg'>Latest Budgets</h2>
          {budgetList.map((budget, index) => (
            <BudgetItem budget={budget} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
