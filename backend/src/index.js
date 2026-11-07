import express from "express";
import cors from "cors";
import "dotenv/config";
import fs from "fs";
import path from "path"; 

import clerkWebhook from "./websockets/clerk.webhook.js"
import User from "./models/user.model.js";
import job from "./libs/cron.js";

import { connectDB } from "./libs/db.js";
import { clerkMiddleware, clerkClient, getAuth } from '@clerk/express'


const app = express();
const FRONTEND_URL = process.env.FRONTEND_URL; 
const PORT = process.env.PORT;

const publicDir = path.join(process.cwd(), "public");


app.use("/api/webhook/clerk",express.raw({type:"application/json"}),clerkWebhook);
app.use(express.json());
app.use(cors({origin:FRONTEND_URL, credentials:true}));
app.use(clerkMiddleware());


app.get("/health",(req,res)=>{
    res.status(200).json({ ok:true  });
});

if(fs.existsSync(publicDir)){
    app.use(express.static(publicDir));
    app.get("/{*any}",(req,res,next)=>{
        res.sendFile(path.join(publicDir, "index.html"), (err) => next(err));
    })
}

app.listen(PORT,()=>{ 
    connectDB();
    console.log(`Server is running on ${PORT}`);

    if(process.env.NODE_URL == "production") job.start();
});
