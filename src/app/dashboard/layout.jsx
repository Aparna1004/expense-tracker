import DashboardHeader from '@/Components/DashboardHeader'
import SideNav from '@/Components/SideNav'
import React from 'react'

export default async function layout({children}) {
  return (
    <div className='flex'>
      <SideNav/>
      <div className='flex flex-col grow'>
      <div><DashboardHeader/></div>  
        {children}
      </div>
    </div>
  )
}
