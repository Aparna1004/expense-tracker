"use client";

import DashboardHeader from '@/Components/DashboardHeader';
import SideNav from '@/Components/SideNav';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '@/firebase'; // Adjust the import path as necessary

export default function Layout({ children }) {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures the component only renders on the client side
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (!isClient) {
    return null; // Or a loading spinner, placeholder, etc.
  }

  return (
    <div>
      <div className='fixed md:w-64 hidden md:block'>
        <SideNav />
      </div>
      <div className='md:ml-64'>
        <div><DashboardHeader /></div>
        {children}
      </div>
    </div>
  );
}
