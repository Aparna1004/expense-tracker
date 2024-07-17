import React from 'react'

function AddExpense() {
  return (
    <div>
      <h2 className='font-bold text-lg'>Add Expense</h2>
      <div className='mt-2'>
        <h2 className='text-black font-medium my-1'>Expense Name</h2>
        <Input placeholder="e.g. Home Decor"
        onchange={(e)=>setName(e.target.value)}
        />
      </div>

      <div className='mt-2'>
        <h2 className='text-black font-medium my-1'>Expense Name</h2>
      </div>
    </div>
  )
}

export default AddExpense
