"use client";
import React from 'react';
import { Button } from '@/Components/ui/button';
import { useRouter } from 'next/navigation';

function Landing() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <div className="w-full max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center lg:py-0">
        <div className="w-full max-w-3xl text-center mx-auto">
          <h1
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Manage Your Expenses
            <br />
            <span className="block sm:inline"> Invest Smart. </span>
          </h1>
  
          <p className="mt-4 mx-auto max-w-xl text-lg sm:text-xl md:text-2xl leading-relaxed">
            Create your budget and spend wisely.
          </p>
  
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              className="w-full sm:w-auto rounded border border-blue-600 bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring active:text-opacity-75 sm:px-12 sm:py-3 sm:text-sm"
              onClick={() => router.push('/login')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
