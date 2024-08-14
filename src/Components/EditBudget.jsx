"use client";
import React, { useEffect, useState } from 'react';
import { RiEdit2Line } from "react-icons/ri";
import { Button } from './ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import EmojiPicker from 'emoji-picker-react';
import { Input } from './ui/input';
import { db } from '@/utils/dbConfig';
import { Budgets } from '@/utils/schema';
import { eq } from 'drizzle-orm';

export const EditBudget = ({budgetInfo, refreshData}) => {
    const [emojiIcon, setEmojiIcon] = useState(budgetInfo?.icon);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [name, setName] = useState(budgetInfo?.name);
    const [amount, setAmount] = useState(budgetInfo?.amount);

    useEffect(() => {
        if (budgetInfo) {
            setEmojiIcon(budgetInfo.icon);
            setName(budgetInfo.name);
            setAmount(budgetInfo.amount);
        }
    }, [budgetInfo]);

    const onUpdateBudget = async () => {
        const result = await db.update(Budgets).set({
            name: name,
            amount: amount,
            icon: emojiIcon,
        }).where(eq(Budgets.id, budgetInfo?.id)).returning();

        if (result) {
            refreshData();
            console.log("Budget updated successfully!");
        }
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild className='w-full'>
                    <Button className="flex gap-2 bg-blue-600 text-white hover:bg-blue-500">
                        <RiEdit2Line /> Edit
                    </Button>
                </DialogTrigger>
                <DialogContent className="bg-white rounded-lg p-4 sm:p-6 md:w-96 lg:w-1/3 mx-auto">
                    <DialogHeader>
                        <DialogTitle>Edit Budget</DialogTitle>
                        <DialogDescription>
                            <div className='relative mt-5'>
                                <Button size="lg" className="text-lg" variant="outline" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                                    {emojiIcon}
                                </Button>
                                {showEmojiPicker && (
                                    <div className='absolute z-10'>
                                        <EmojiPicker 
                                            onEmojiClick={(e) => {
                                                setEmojiIcon(e.emoji);
                                                setShowEmojiPicker(false);
                                            }}
                                        />
                                    </div>
                                )}
                                <div className='mt-2'>
                                    <h2 className='text-black font-medium my-1'>Budget Name</h2>
                                    <Input 
                                        type="text" 
                                        placeholder="e.g Home Decor" 
                                        onChange={(e) => setName(e.target.value)} 
                                        value={name} 
                                    />
                                </div>
                                <div className='mt-2'>
                                    <h2 className='text-black font-medium my-1'>Budget Amount</h2>
                                    <Input 
                                        type="number" 
                                        placeholder="e.g 5000" 
                                        onChange={(e) => setAmount(e.target.value)} 
                                        value={amount} 
                                    />
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose className='w-full'>
                            <Button 
                                disabled={!(name && amount)} 
                                onClick={onUpdateBudget} 
                                className="bg-blue-600 text-white rounded-md mt-5 w-full hover:bg-blue-500"
                            >
                                Update Budget
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
