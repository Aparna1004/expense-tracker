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

const CreateBudget = () => {

  const [emojiIcon,setEmojiIcon]=useState("😁");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

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
                  <Input placeholder="e.g Home Decor"></Input>
                </div>
                <div className='mt-2'> 
                  <h2 className='text-black font-medium my-1'>Budget Amount</h2>
                  <Input placeholder="e.g 5000"></Input>
                </div>
                <Button className="bg-blue-600 text-white rounded-md mt-5 w-full hover:bg-blue-500">Create Budget</Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default CreateBudget
