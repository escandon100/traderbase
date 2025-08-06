import { Router } from "express"
import verifyUser from "../middleware/userAuth.js"

const router = Router()

router.get('/userDashboard', verifyUser, (req, res) => {
  res.json({ message: 'Welcome, User! This is the dashboard.' });
});

export default router
