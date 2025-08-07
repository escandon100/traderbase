import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import adminLoginRoutes from './routes/adminLogin.js';
import adminDashboardRoutes from './routes/adminDashboard.js'; 
import emailRoutes from './routes/email.js';
import userRegisterRoutes from "./routes/userRegister.js";
import userLoginRoutes from "./routes/userLogin.js";
import userDashboardRoutes from "./routes/userDashboard.js";

dotenv.config();

const app = express()



app.use(cors({ origin : "http://localhost:5173" , credentials : true}));
app.use(express.json());

app.use('/api/adminLogin', adminLoginRoutes);
app.use('/api/adminDashboard', adminDashboardRoutes);
app.use('/api/email', emailRoutes);
app.use("/api/userRegister", userRegisterRoutes)
app.use("/api/userLogin" , userLoginRoutes)
app.use('/api/userDashboard', userDashboardRoutes);


app.listen(5000, () => console.log(`Server running on port 5000`));









