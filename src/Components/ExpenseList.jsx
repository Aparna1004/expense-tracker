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
    <div className='mt-5 px-4 sm:px-6 lg:px-8'>
      <h2 className='font-bold text-lg mt-2'>Latest Expenses</h2>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 bg-slate-200 p-2 mt-3 text-sm sm:text-base'>
        <h2 className='font-bold text-center'>Name</h2>
        <h2 className='font-bold text-center'>Amount</h2>
        <h2 className='font-bold text-center'>Date</h2>
        <h2 className='font-bold text-center'>Action</h2>
      </div>
      {expensesList.length > 0 ? (
        expensesList.map((expense, index) => (
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4 bg-slate-50 p-2 mt-2 rounded-md' key={expense.id || index}>
            <h2>{expense.name}</h2>
            <h2>{expense.amount}</h2>
            <h2>{new Date(expense.createdAt).toLocaleDateString()}</h2> {/* Changed createdBy to createdAt */}
            <h2 className='flex items-center justify-center'>
              <GoTrash 
                className='text-red-600 cursor-pointer text-lg hover:text-red-800' 
                onClick={() => deleteExpense(expense)} 
              />
            </h2>
          </div>
        ))
      ) : (
        <p className='text-center text-gray-500 mt-4'>No expenses found.</p>
      )}
    </div>
  )
}

export default ExpenseList;
