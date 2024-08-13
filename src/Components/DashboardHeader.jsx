import React from 'react'
import { auth } from '@/firebase'
import SignOutButton from "../Components/SignOutButton";

function DashboardHeader() {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between'>
        <div>


        </div>

        <div>
          <SignOutButton />
        </div>
      
    </div>
  )
}

export default DashboardHeader
