import { db } from '@/utils/dbConfig';
import { Expense } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React from 'react';
import { GoTrash } from "react-icons/go";

const ExpenseList = ({ expensesList, refreshData }) => {

  const deleteExpense = async (expense) => {
    try {
      const result = await db.delete(Expense).where(eq(Expense.id, expense.id)).returning();
      if (result) {
        refreshData();
      }
    } catch (error) {
      console.error("Failed to delete expense:", error);
    }
  }

  return (
    <div className='mt-5'>
      <h2 className='font-bold text-lg mt-2'>Latest Expenses</h2>
      <div className='grid grid-cols-4 bg-slate-200 p-2 mt-3'>
        <h2 className='font-bold'>Name</h2>
        <h2 className='font-bold'>Amount</h2>
        <h2 className='font-bold'>Date</h2>
        <h2 className='font-bold flex justify-center'>Action</h2>
      </div>
      {expensesList.map((expense, index) => (
        <div className='grid grid-cols-4 bg-slate-50 p-2' key={expense.id || index}>
          <h2>{expense.name}</h2>
          <h2>{expense.amount}</h2>
          <h2>{new Date(expense.createdBy).toLocaleDateString()}</h2>
          <h2 className='flex items-center justify-center'><GoTrash className='text-red-600 cursor-pointer text-lg' onClick={() => deleteExpense(expense)} /></h2>
        </div>
      ))}
    </div>
  )
}

export default ExpenseList;
