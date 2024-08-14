"use client";
import Register from '@/Components/Register';
import React from 'react';

const Page = () => {
  // const router = useRouter();
  // const user = useUser();
  // if(!user) router.replace('/dashboard');

  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md">
        <Register />
      </div>
    </div>
  );
};

export default Page;
