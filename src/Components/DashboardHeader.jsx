import React from 'react';
import { auth } from '@/firebase';
import SignOutButton from "../Components/SignOutButton";

function DashboardHeader() {
  return (
    <header className='p-4 sm:p-5 shadow-sm border-b flex justify-between items-center'>
      <div className='flex items-center'>
        {/* Placeholder for additional content, like a logo or title */}
        <h1 className='text-lg sm:text-xl font-bold'>Dashboard</h1>
      </div>
      <div>
        <SignOutButton />
      </div>
    </header>
  );
}

export default DashboardHeader;
