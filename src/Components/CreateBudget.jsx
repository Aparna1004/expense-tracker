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
import EmojiPicker from "emoji-picker-react";
import Button from "@/Components/ButtonDemo";

function CreateBudget() {
    const [emojiIcon, setEmojiIcon] = useState("😁");
    const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

    const handleEmojiClick = (event, emojiObject) => {
        setEmojiIcon(emojiObject.emoji);
        setOpenEmojiPicker(false);
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <div className='bg-slate-100 p-10 rounded-md items-center flex flex-col border-2 border-dotted cursor-pointer 
                        hover:shadow-md'>
                        <h2 className='text-3xl'>+</h2>
                        <h2>Create New Budget</h2>
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Budget</DialogTitle>
                        <DialogDescription>
                            {/* <div>
                                 <Button variant="outline" onClick={() => setOpenEmojiPicker(!openEmojiPicker)}>
                                    {emojiIcon}</Button></div> */}
                                    <div></div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default CreateBudget;
