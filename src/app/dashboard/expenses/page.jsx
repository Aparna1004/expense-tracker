"use client";
import ExpenseList from '@/Components/ExpenseList'
import React, { useEffect, useState } from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '@/firebase';
import { db } from '@/utils/dbConfig';
import { Budgets, Expense } from '@/utils/schema';
import { desc, eq } from 'drizzle-orm';
import { FaArrowLeft } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

export default function page() {

  const [user] = useAuthState(auth);
  const [expensesList, setExpensesList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    user && getAllExpenses();
  }, [user]);

  const getAllExpenses = async () => {
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
};

  return (
    <div className='h-screen p-10'>
      <div className='flex gap-2 items-center'>
        <FaArrowLeft className='text-3xl font-extrabold cursor-pointer' onClick={()=>router.back()}/>
        <h2 className='font-bold text-3xl'>My Expenses</h2>
      </div>
        <ExpenseList expensesList={expensesList} refreshData={()=>getAllExpenses()}/>
    </div>
  )
}
