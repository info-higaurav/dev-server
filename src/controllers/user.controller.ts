import asyncHandler from "../utils/asyncHandler";
import ApiResponse from "../utils/ApiResponse";
import { NextFunction, Request, Response } from "express";
import { validateUserPayload } from "../services/validation/user.validation";
import { User } from "../model/user.model";

export const healthChek = asyncHandler(async (req:Request , res:Response , next:NextFunction)=>{
    return ApiResponse.success([],"Success",200).send(res)
})

export const registerUser = asyncHandler(async (req:Request , res:Response , next:NextFunction)=>{
    const body = req.body;
    const payload = validateUserPayload.parse(body);

    // checking if user already exists
    const {email , ...rest}=payload;
    const userExists = await User.find({email:email});
    if(userExists.length){
        return  ApiResponse.failure([],"User already exists",400).send(res)
    }
    // register new user
    const user = new User(payload)
    const response = await user.save()
    if(response){
        return  ApiResponse.success([response],"User has been registered successfully",201).send(res)
    }
})

export const updateUser = asyncHandler(async (req:Request , res:Response , next:NextFunction)=>{
    console.log(req.body)
})
export const getUser = asyncHandler(async (req:Request , res:Response , next:NextFunction)=>{
    console.log(req.body)
})
export const deleteUser = asyncHandler(async (req:Request , res:Response , next:NextFunction)=>{
    console.log(req.body)
})

