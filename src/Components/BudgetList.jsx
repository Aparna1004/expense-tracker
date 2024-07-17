import React from 'react'
import CreateBudget from './CreateBudget'
import { ButtonDemo } from '@/Components/ButtonDemo'

function budgetlist() {
  return (
    <div className='mt-7'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
     <CreateBudget/>
     </div>

    </div>
  )
}

export default budgetlist
