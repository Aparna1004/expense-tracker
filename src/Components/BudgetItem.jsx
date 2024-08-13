import Link from 'next/link';
import React from 'react'
import { LiaRupeeSignSolid } from "react-icons/lia";

const BudgetItem = ({budget}) => {
  const calculateProgressPrec=() => {
    const per=(budget.totalSpend/budget.amount)*100;
    return per.toFixed(2);
  }

  return (
    <Link href={"/dashboard/expenses/"+budget.id} >
      <h2></h2>
      <div className='p-5 border rounded-lg hover:shadow-md cursor-pointer h-[170px]'>
        <div className='flex gap-2 items-center justify-between'>
        <div className='flex gap-2 items-center'>
            <h2 className='p-3 px-4 bg-slate-100 rounded-full text-2xl'>
                {budget?.icon}
            </h2>
            <div>
                <h2 className='font-bold'>{budget.name}</h2>
                <h2 className='text-sm text-gray-500'>{budget.totalItem} Item</h2>
            </div>
        </div>
        <h2 className='font-bold text-primary text-lg'>${budget.amount}</h2>
        </div>
        <div className='mt-5'>
            <div className='flex items-center justify-between mb-3'>
              <h2 className='text-xs text-slate-400'><LiaRupeeSignSolid />{(budget.totalSpend)?budget.totalSpend:0} Spent</h2>
              <h2 className='text-xs text-slate-400'><LiaRupeeSignSolid />{budget.amount-budget.totalSpend} Remaining</h2>
            </div>
            <div className='w-full bg-slate-300 h-2 rounded-full'>
              <div className='bg-blue-600 h-2 rounded-full'
              style={{
                width: `${calculateProgressPrec()}%`,
              }}
              ></div>
            </div>
        </div>
        </div>
    </Link>
  )
}

export default BudgetItem
