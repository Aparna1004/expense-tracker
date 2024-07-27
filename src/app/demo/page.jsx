"use client";
import { auth } from '@/firebase';
import React, { useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';

const Page = ({ params }) => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [user]);

  const handleSignOut = () => {
    console.log("red");
    signOut(auth);
    console.log(user);
  };

  return (
    <div className='flex justify-center items-center'>
      <button className='p-3' onClick={handleSignOut}>Logout</button>
    </div>
  );
};

export default Page;
