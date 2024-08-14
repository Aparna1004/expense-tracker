"use client";
import React, { useEffect, useState } from 'react';
import { PiPiggyBankBold } from "react-icons/pi";
import { TiDocumentText } from "react-icons/ti";
import { BiSolidWallet } from "react-icons/bi";
import { LiaRupeeSignSolid } from "react-icons/lia";

export const CardInfo = ({ budgetList }) => {

  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpent, setTotalSpent] = useState(0);
  
  useEffect(() => {
    if (budgetList) {
      calculateCardInfo();
    }  
  }, [budgetList]);

  const calculateCardInfo = () => {
    let totalBudget_ = 0;
    let totalSpent_ = 0;
    budgetList.forEach(item => {
      totalBudget_ += Number(item.amount);
      totalSpent_ += item.totalSpend;
    });
    setTotalBudget(totalBudget_);
    setTotalSpent(totalSpent_);
  }
  
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center justify-between border p-4 sm:p-6 lg:p-7 rounded-lg bg-white shadow-md">
          <div>
            <h2 className="text-xs sm:text-sm lg:text-base text-gray-500">Total Budget</h2>
            <h2 className="font-bold text-lg sm:text-xl lg:text-2xl flex gap-2 items-center">
              <LiaRupeeSignSolid />
              <div>{totalBudget}</div>
            </h2>
          </div>
          <PiPiggyBankBold className="bg-blue-800 p-2 sm:p-3 lg:p-4 h-10 sm:h-12 lg:h-14 w-10 sm:w-12 lg:w-14 rounded-full text-white" />
        </div>
        <div className="flex items-center justify-between border p-4 sm:p-6 lg:p-7 rounded-lg bg-white shadow-md">
          <div>
            <h2 className="text-xs sm:text-sm lg:text-base text-gray-500">Total Spent</h2>
            <h2 className="font-bold text-lg sm:text-xl lg:text-2xl flex gap-2 items-center">
              <LiaRupeeSignSolid />
              <div>{totalSpent}</div>
            </h2>
          </div>
          <TiDocumentText className="bg-blue-800 p-2 sm:p-3 lg:p-4 h-10 sm:h-12 lg:h-14 w-10 sm:w-12 lg:w-14 rounded-full text-white" />
        </div>
        <div className="flex items-center justify-between border p-4 sm:p-6 lg:p-7 rounded-lg bg-white shadow-md">
          <div>
            <h2 className="text-xs sm:text-sm lg:text-base text-gray-500">No. of Budget</h2>
            <h2 className="font-bold text-lg sm:text-xl lg:text-2xl">{budgetList?.length}</h2>
          </div>
          <BiSolidWallet className="bg-blue-800 p-2 sm:p-3 lg:p-4 h-10 sm:h-12 lg:h-14 w-10 sm:w-12 lg:w-14 rounded-full text-white" />
        </div>
      </div>
    </div>
  )
}
