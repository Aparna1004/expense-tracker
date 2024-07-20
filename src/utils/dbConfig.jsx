import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "@/utils/schema";
const sql = neon("postgresql://database_owner:W5VcsHFTd4qN@ep-bold-sky-a5h7gzhf.us-east-2.aws.neon.tech/expensetracker?sslmode=require");
export const db = drizzle(sql,{schema});