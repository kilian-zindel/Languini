import express from 'express'; 
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser'

dotenv.config();    // allows access to .env variables using process.env.varName

const PORT = process.env.PORT;
const app = express();

connectDB(process.env.MONGODB_URI)

app.use(express.json()) // extract json data from post request body 
app.use(cookieParser()) // can parse Cookies 

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})