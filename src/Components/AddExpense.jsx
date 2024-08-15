"use client";
import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { db } from '@/utils/dbConfig';
import { Budgets, Expense } from '@/utils/schema';
import moment from 'moment';
import { Loader } from 'lucide-react';

function AddExpense({ budget, budgetId, refreshData }) {

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const AddNewExpense = async () => {
    setLoading(true);

    if (amount <= (budget?.amount-budget?.totalSpend)){
    const result = await db.insert(Expense).values({
      name: name,
      amount: amount,
      budgetId: budgetId,
      createdAt: moment().format("DD-MM-YYYY")
    }).returning({ insertedAt: Budgets.id });
    setName('');
    setAmount('');
    console.log(result);

    if (result) {
      setLoading(false);
      refreshData();
    }
    setLoading(false);
    }else{
      alert("Amount Exceeded")
      setLoading(false);
    }
  }

  return (
    <div className='border p-4 sm:p-6 lg:p-8 rounded-md bg-white shadow-sm'>
      <h2 className='font-bold text-lg sm:text-xl mb-4'>Add Expense</h2>
      
      <div className='mt-2'>
        <label className='text-black font-medium my-1 block'>Expense Name</label>
        <Input
          placeholder="e.g. Home Decor"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 sm:p-3"
        />
      </div>

      <div className='mt-4'>
        <label className='text-black font-medium my-1 block'>Expense Amount</label>
        <Input
          placeholder="e.g. 10000"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 sm:p-3"
        />
      </div>
      
      <Button 
        onClick={() => AddNewExpense()} 
        disabled={!(name && amount) || loading} 
        className="bg-blue-800 hover:bg-blue-600 mt-4 w-full text-white py-2 sm:py-3"
      >
        {loading ? <Loader className='animate-spin' /> : "Add New Expense"}
      </Button>
    </div>
  );
}

export default AddExpense;
