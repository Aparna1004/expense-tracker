"use client";
import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button';

function AddExpense() {

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className='border p-4'>
      <h2 className='font-bold text-lg'>Add Expense</h2>
      <div className='mt-2'>
        <h2 className='text-black font-medium my-1'>Expense Name</h2>
        <Input placeholder="e.g. Home Decor"
        onchange={(e)=>setName(e.target.value)}
        />
      </div>

      <div className='mt-2'>
        <h2 className='text-black font-medium my-1'>Expense Amount</h2>
        <Input placeholder="e.g. 10000"
        onchange={(e)=>setAmount(e.target.value)}
        />
      </div>
      <Button disabled={!(name&&amount)} className=" bg-blue-600 hover:bg-blue-400 mt-2 w-full text-white">Add New Expenses</Button>
    </div>
  )
}

export default AddExpense
