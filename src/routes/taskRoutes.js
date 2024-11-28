import express from "express" ;
import { createtask } from "../controllers/task/taskController.js";
import {protect} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/task/create",protect , createtask);

export default router;


 
