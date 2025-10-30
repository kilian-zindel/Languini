import express from 'express'; 
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';

import { connectDB } from './lib/db.js';
import { app, server } from './lib/socket.js';

import path from "path"

dotenv.config();    // allows access to .env variables using process.env.varName

const PORT = process.env.PORT;
const __dirname = app.resolve();

connectDB(process.env.MONGODB_URI)

app.use(express.json()) // extract json data from post request body 
app.use(cookieParser()) // can parse Cookies 
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV==="production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}

server.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})