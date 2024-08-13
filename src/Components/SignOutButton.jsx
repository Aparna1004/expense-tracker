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
    <div className='flex justify-center items-center flex-col'>
      <button className='p-3 flex justify-center items-center flex-col' onClick={handleSignOut}>
        <h2 className="text-md font-bold"><FiLogOut className="text-md"/>Logout</h2>
      </button>
    </div>
  );
};

export default SignOutButton;
