"use client";
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button';
import { db } from '@/utils/dbConfig';
import { Budgets, Expense } from '@/utils/schema';
import moment from 'moment';

function AddExpense({budgetId,user,refreshData}) {

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const AddNewExpense= async()=>{
   const result = await db.insert(Expense).values({
      name: name,
      amount: amount,
      budgetId: budgetId,
      createdBy: moment().format("YYYY-MM-DD")
   }).returning({insertedAt:Budgets.id})
   console.log(result);
   if (result){
      refreshData();
   }
  }

  return (
    <div className='border p-4'>
      <h2 className='font-bold text-lg'>Add Expense</h2>
      <div className='mt-2'>
        <h2 className='text-black font-medium my-1'>Expense Name</h2>
        <Input placeholder="e.g. Home Decor"
        type="text"
        onChange={(e)=>setName(e.target.value)}
        />
      </div>

      <div className='mt-2'>
        <h2 className='text-black font-medium my-1'>Expense Amount</h2>
        <Input placeholder="e.g. 10000"
        type="number"
        onChange={(e)=>setAmount(e.target.value)}
        />
      </div>
      <Button onClick={()=>AddNewExpense()} disabled={!(name&&amount)} className=" bg-blue-800 hover:bg-blue-600 mt-2 w-full text-white">Add New Expenses</Button>
    </div>
  )
}

export default AddExpense
