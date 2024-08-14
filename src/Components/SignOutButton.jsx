"use client";
import { auth } from '@/firebase';
import React, { useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { FiLogOut } from "react-icons/fi";

const SignOutButton = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [user, loading, router]);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("User signed out");
      router.replace('/login');
    }).catch(error => {
      console.error("Error signing out:", error);
    });
  };

  return (
    <div className='flex justify-center items-center p-4'>
      <button
        className='flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm md:text-md lg:text-lg'
        onClick={handleSignOut}
      >
        <FiLogOut className="text-lg md:text-xl" />
        <h2 className="text-sm md:text-md lg:text-lg font-bold">Logout</h2>
      </button>
    </div>
  );
};

export default SignOutButton;
