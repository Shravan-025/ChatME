import express from "express";
import cors from "express";
import "dotenv/config";

import User from "./models/user.model.js";

import { connectDB } from "./libs/db.js";
import { clerkMiddleware, clerkClient, getAuth } from '@clerk/express'


const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({origin:FRONTEND_URL, credentials:true}));
app.use(clerkMiddleware());


app.get("/health",(req,res)=>{
    res.status(200).json({ ok:true  });
});

app.listen(PORT,()=>{ 
    connectDB();
    console.log(`Server is running on ${PORT}`);
});