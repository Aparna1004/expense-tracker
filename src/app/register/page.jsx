"use client";
import Register from '@/Components/Register'
import { useUser } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import React from 'react';

const page = () => {
  // const router = useRouter();
  // const user = useUser();
  // if(!user) router.replace('/dashboard');

  return (
    <div>
      <Register/>
    </div>
  )
}

export default page
