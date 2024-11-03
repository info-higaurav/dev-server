import { NextFunction, Request, Response } from "express";

// importing necessary utils
import asyncWrapper from "../utils/asyncWrapper";
import ApiResponse from "../utils/apiResponse";

export const  healthCheck = asyncWrapper(async (req:Request , res:Response , next:NextFunction)=>{
   return ApiResponse.success([],"success",200).send(res)
})