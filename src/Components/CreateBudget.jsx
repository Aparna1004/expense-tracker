"use client";
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EmojiPicker from 'emoji-picker-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { db } from '@/utils/dbConfig';
import { auth } from '@/firebase';
import { Budgets } from '@/utils/schema';
import { toast } from 'sonner';

const CreateBudget = () => {

  const [emojiIcon,setEmojiIcon]=useState("😁");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const [name,setName]=useState();
  const [amount,setAmount]=useState();

  const onCreateBudget=async()=>{
    const result = await db.insert(Budgets).values(
      {
        name:name,
        amount:amount,
        emojiIcon:emojiIcon,
        createdBy:auth?.currentUser?.email,
        icon:emojiIcon
      }
    ).returning({insertedId:Budgets.id});

    if(result){
      toast("Budgets created successfully")
    }
  }
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div className='bg-slate-100 py-12 px-20 rounded-md flex items-center flex-col border-2 border-dashed cursor-pointer hover:shadow-md'>
            <h2 className='text-3xl'>+</h2>
            <h2>Create New Budget</h2>
          </div>
        </DialogTrigger>
        <DialogContent className="bg-white rounded-lg">
          <DialogHeader>
            <DialogTitle>Create New Budget</DialogTitle>
            <DialogDescription>
              <div className='mt-5'>
                <Button size="lg" className="text-lg" variant="outline" onClick={()=>setShowEmojiPicker(!showEmojiPicker)}>{emojiIcon}</Button>
                <div className=' absolute'>
                  <EmojiPicker
                  open={showEmojiPicker}
                  onEmojiClick={(e)=>{ 
                    setEmojiIcon(e.emoji)
                    setShowEmojiPicker(false)
                  }}
                  />
                </div>
                <div className='mt-2'> 
                  <h2 className='text-black font-medium my-1'>Budget Name</h2>
                  <Input type="text" placeholder="e.g Home Decor" onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='mt-2'> 
                  <h2 className='text-black font-medium my-1'>Budget Amount</h2>
                  <Input type="number" placeholder="e.g 5000 " onChange={(e)=>setAmount(e.target.value)} />
                </div>
                <Button disabled={!(name&&amount)} onClick={()=>onCreateBudget()} className="bg-blue-600 text-white rounded-md mt-5 w-full hover:bg-blue-500">Create Budget</Button>
              </div> 
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default CreateBudget
