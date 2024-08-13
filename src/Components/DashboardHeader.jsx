import React from 'react'
import { auth } from '@/firebase'
import { FiLogOut } from "react-icons/fi";

function DashboardHeader() {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between'>
        <div>


        </div>

        <div>
          <h2 className="text-xl font-bold">Logout</h2><FiLogOut />
        </div>
      
    </div>
  )
}

export default DashboardHeader
