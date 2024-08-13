"use client";
import React, { useEffect, useState } from 'react'
import { PiPiggyBankBold } from "react-icons/pi";
import { TiDocumentText } from "react-icons/ti";
import { BiSolidWallet } from "react-icons/bi";
import { LiaRupeeSignSolid } from "react-icons/lia";

export const CardInfo = ({budgetList}) => {

    const [totalBudget,setTotalBudget] = useState(0);
    const [totalSpent,setTotalSpent] = useState(0);
    
    useEffect(() => {
        if(budgetList){
            calculateCardInfo();

        }  
    },[budgetList]);

    const calculateCardInfo =() =>{
        console.log(budgetList);
        let totalBudget_=0;
        let totalSpent_= 0;
        budgetList.forEach(item=>{
            totalBudget_+=Number(item.amount)
            totalSpent_+= item.totalSpend
        });
        setTotalBudget(totalBudget_);
        setTotalSpent(totalSpent_);
    }
    
    return (
    <div>
         <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='flex items-center justify-between border p-7 rounded-lg '>
                <div>
                    <h2 className='text-sm'>Total Budget</h2>
                    <h2 className='font-bold text-2xl flex gap-2'><LiaRupeeSignSolid /> <div>{totalBudget}</div></h2>
                </div>
                <PiPiggyBankBold className='bg-blue-800 p-3 h-12 w-12 rounded-full text-white' />
            </div>
            <div className='flex items-center justify-between border p-7 rounded-lg '>
                <div>
                    <h2 className='text-sm'>Total Spent</h2>
                    <h2 className='font-bold text-2xl flex gap-2'><LiaRupeeSignSolid /> <div>{totalSpent}</div></h2>
                </div>
                <TiDocumentText className='bg-blue-800 p-3 h-12 w-12 rounded-full text-white'/>
            </div>
            <div className='flex items-center justify-between border p-7 rounded-lg '>
                <div>
                    <h2 className='text-sm'>No. of Budget</h2>
                    <h2 className='font-bold text-2xl'>{budgetList?.length}</h2>
                </div>
                <BiSolidWallet className='bg-blue-800 p-3 h-12 w-12 rounded-full text-white' />
            </div>
         </div>
    </div>
  )
}
