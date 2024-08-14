import Link from 'next/link';
import React from 'react';
import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoWarningSharp } from "react-icons/io5";


const BudgetItem = ({ budget }) => {
  const calculateProgressPrec = () => {
    const per = (budget.totalSpend / budget.amount) * 100;
    return per.toFixed(2);
  }

  return (
    <Link href={`/dashboard/expenses/${budget.id}`} >
      <div className='p-4 sm:p-5 border rounded-lg hover:shadow-md cursor-pointer h-auto'>
        <div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between'>
          <div className='flex gap-4 items-center'>
            <div className='p-2 sm:p-3 bg-slate-100 rounded-full text-2xl'>
              {false ? budget?.icon : <IoWarningSharp className="text-red-400 text-2xl"/>}
            </div>
            <div>
              <h2 className='font-bold text-lg sm:text-xl'>{budget.name}</h2>
              <h2 className='text-sm text-gray-500'>{budget.totalItem} Item</h2>
            </div>
          </div>
          <h2 className='font-bold text-primary text-lg flex gap-2 items-center'>
            <LiaRupeeSignSolid />
            <div>{budget.amount}</div>
          </h2>
        </div>
        <div className='mt-4'>
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 text-xs text-slate-400'>
            <h2 className='flex gap-1 items-center'>
              <LiaRupeeSignSolid />
              <div>{budget.totalSpend ? budget.totalSpend : 0} Spent</div>
            </h2>
            <h2 className='flex gap-1 items-center'>
              <LiaRupeeSignSolid />
              <div>{budget.amount - budget.totalSpend} Remaining</div>
            </h2>
          </div>
          <div className='w-full bg-slate-300 h-2 rounded-full'>
            <div className={`${(calculateProgressPrec()<80)?'bg-blue-600':'bg-red-600'} h-2 rounded-full`}
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

export default BudgetItem;
