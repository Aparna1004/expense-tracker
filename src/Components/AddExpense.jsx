"use client";
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button';
import { db } from '@/utils/dbConfig';
import { Budgets, Expense } from '@/utils/schema';
import moment from 'moment';
import { Loader } from 'lucide-react';

function AddExpense({budgetId,refreshData}) {

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const AddNewExpense= async()=>{
    setLoading(true);
   const result = await db.insert(Expense).values({
      name: name,
      amount: amount,
      budgetId: budgetId,
      createdAt: moment().format("YYYY-MM-DD")
   }).returning({insertedAt:Budgets.id})
   setName('');
   setAmount('');
   console.log(result);



   if (result){
    setLoading(false);
      refreshData();
   }
   setLoading(false);
  }

  return (
    <div className='border p-4'>
      <h2 className='font-bold text-lg'>Add Expense</h2>
      <div className='mt-2'>
        <h2 className='text-black font-medium my-1'>Expense Name</h2>
        <Input placeholder="e.g. Home Decor"
        type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
      </div>

      <div className='mt-2'>
        <h2 className='text-black font-medium my-1'>Expense Amount</h2>
        <Input placeholder="e.g. 10000"
        type="number"
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
        />
      </div>
      <Button onClick={()=>AddNewExpense()} disabled={!(name&&amount)||loading} className="bg-blue-800 hover:bg-blue-600 mt-2 w-full text-white">
        {loading?<Loader className='animate-spin'/>:"Add New Expenses"}
      </Button>
    </div>
  )
}

export default AddExpense
