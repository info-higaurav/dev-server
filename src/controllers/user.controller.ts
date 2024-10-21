import asyncHandler from "../utils/asyncHandler";
import ApiResponse from "../utils/ApiResponse";
import { NextFunction, Request, Response } from "express";

export const healthChek = asyncHandler(async (req:Request , res:Response , next:NextFunction)=>{
    return ApiResponse.success([],"Success",200).send(res)
})
