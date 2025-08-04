import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js'; 
import emailRoutes from './routes/email.js';

dotenv.config();

const app = express()



app.use(cors({ origin : "http://localhost:5173" , credentials : true}));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/email', emailRoutes);


app.listen(5000, () => console.log(`Server running on port 5000`));









