import React from 'react'
import { auth } from '@/firebase'

function DashboardHeader() {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between'>
        <div>


        </div>

        <div>
            {auth?.currentUser?.email}
        </div>
      
    </div>
  )
}

export default DashboardHeader
