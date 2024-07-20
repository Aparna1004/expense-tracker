import React from 'react'

const BudgetItem = ({budget}) => {

  return (
    <div className=' p-5 border rounded-lg'>
        <div className='flex gap-2 items-center justify-between'>
        <div className='flex gap-2 items-center'>
            <h2 className='p-3 px-4 bg-slate-100 rounded-full text-2xl'>
                {budget?.icon}
            </h2>
            <div>
                <h2>{budget.name}</h2>
                <h2>{budget.totalItem} Item</h2>
            </div>
        </div>
        <h2 className='font-bold text-primary text-lg'>$S{budget.amount}</h2>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default BudgetItem
