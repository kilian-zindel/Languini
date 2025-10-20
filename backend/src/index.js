import express from 'express'; 
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser'

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';

import { connectDB } from './lib/db.js';
import { app, server } from './lib/socket.js';

dotenv.config();    // allows access to .env variables using process.env.varName

const PORT = process.env.PORT;

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

server.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})