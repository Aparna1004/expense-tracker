"use client";
import { db } from '@/utils/dbConfig';
import { Budgets, Expense } from '@/utils/schema';
import { getTableColumns, eq, sql, desc } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { auth } from '@/firebase';
import BudgetItem from '@/Components/BudgetItem';
import AddExpense from '@/Components/AddExpense';
import ExpenseList from '@/Components/ExpenseList';
import { Button } from '@/Components/ui/button';
import { GoTrash, GoArrowLeft } from "react-icons/go";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from 'next/navigation';
import { EditBudget } from '@/Components/EditBudget';



const Page = ({ params }) => {
  const router=useRouter();
  const [budgetInfo, setBudgetInfo] = useState(null);
  const [expensesList,setExpensesList] = useState([]);

  useEffect(() => {
    if (auth?.currentUser) {
      getBudgetInfo();
    }
  }, [auth?.currentUser]);

  const getBudgetInfo = async () => {
    try {
      const result = await db.select({
        ...getTableColumns(Budgets),
        totalSpend: sql`sum(${Expense.amount})`.mapWith(Number),
        totalItem: sql`count(${Expense.id})`.mapWith(Number),
      })
        .from(Budgets)
        .leftJoin(Expense, eq(Budgets.id, Expense.budgetId))
        .where(eq(Budgets.createdBy, auth.currentUser.email))
        .where(eq(Budgets.id, params.id))
        .groupBy(Budgets.id)
        .orderBy(desc(Budgets.id));

      setBudgetInfo(result[0]);
      getExpensesList(); 

    } catch (error) {
      console.error("Error fetching budget info:", error);
    }
  };

  const getExpensesList=async()=>{

    const result = await db.select()
    .from(Expense)
    .where(eq(Expense.budgetId,params.id))
    .orderBy(desc(Expense.id));
    setExpensesList(result);
    console.log(result);
  }

  const deleteBudget=async()=>{
    const deleteExpenseResult = await db.delete(Expense).where(eq(Expense.budgetId,params.id)).returning();

    if(deleteExpenseResult){
      const result = await db.delete(Budgets).where(eq(Budgets.id,params.id)).returning();
    }
    router.push("/dashboard/budgets");
  }

  return (
    <div className='p-10'>
      <div className='text-2xl font-bold flex justify-between items-center'>
        <div className='flex gap-2 items-center cursor-pointer '>
            <GoArrowLeft className='text-3xl' onClick={()=>router.back()}/>
            <h2>My Expenses</h2>
          </div>
          <div className='flex gap-4'>
        <div className='flex gap-2 items-center justify-end'>
          <EditBudget budgetInfo={budgetInfo} refreshData={()=>getBudgetInfo()}/>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="fle0x gap-2 bg-red-500 text-white rounded-md hover:bg-red-400">
              <GoTrash/>Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your current budget along with expenses
                and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className=" bg-red-500 text-white hover:bg-red-400" onClick={()=>deleteBudget()}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-6 gap-5'>
        {(budgetInfo) ? <BudgetItem budget={budgetInfo} />:
        <div className=" h-[150px] w-full bg-slate-200 rounded-lg animate-pulse"></div>}
        <AddExpense budgetId={params.id} user={auth} refreshData={()=>getBudgetInfo()}/>
      </div>
      <div className='mt-4'>
        <h2 className='text-2xl font-bold'>Latest Expenses</h2>
        <ExpenseList expensesList={expensesList} refreshData={()=>getBudgetInfo()}/>
      </div>
    </div>
  );
};

export default Page;
