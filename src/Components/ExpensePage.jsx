"use client";
import ExpenseList from '@/Components/ExpenseList';
import React, { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '@/firebase';
import { db } from '@/utils/dbConfig';
import { Budgets, Expense } from '@/utils/schema';
import { desc, eq } from 'drizzle-orm';
import { FaArrowLeft } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

const ExpensePage = () => {
  const [user] = useAuthState(auth);
  const [expensesList, setExpensesList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      getAllExpenses();
    }
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
    console.log("----expensem", result);
  };

  return (
    <div className='min-h-screen p-4 sm:p-6 lg:p-8 xl:p-10'>
      <div className='flex gap-3 items-center mb-4'>
        <FaArrowLeft 
          className='text-2xl sm:text-3xl cursor-pointer hover:text-blue-600 transition-colors'
          onClick={() => router.back()} 
        />
        <h2 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>
          My Expenses
        </h2>
      </div>
      <ExpenseList expensesList={expensesList} refreshData={() => getAllExpenses()} />
    </div>
  );
}

export default ExpensePage;
