import asyncHandler from "express-async-handler";


export const createtask = asyncHandler(async(req,res) => {
    res.status(200).json({message: "create task "});
    
});

