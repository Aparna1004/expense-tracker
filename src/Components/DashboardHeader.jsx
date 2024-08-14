import React from 'react';
import { auth } from '@/firebase';
import SignOutButton from "../Components/SignOutButton";

function DashboardHeader() {
  return (
    <header className='shadow-sm border-b flex justify-between items-center'>
      <div className='flex items-center'>
        {/* Placeholder for additional content, like a logo or title */}
      </div>
      <div>
        <SignOutButton />
      </div>
    </header>
  );
}

export default DashboardHeader;
