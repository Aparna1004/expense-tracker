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
    <div className='flex justify-center items-center'>
      <button className='p-3' onClick={handleSignOut}>
        <h2 className="text-xl font-bold">Logout</h2>
        <FiLogOut />
      </button>
    </div>
  );
};

export default SignOutButton;
