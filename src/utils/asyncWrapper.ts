import { NextFunction, Request, Response } from "express";

type TWrapper = (req: Request , res:Response , next:NextFunction)=> Promise <any>

function asyncWrapper(fn:TWrapper) {
    return async function(req:Request , res:Response , next:NextFunction){
        try {
            await fn(req , res ,next);
        } catch (error) {
           console.log(error)
        }
    }
}

export default asyncWrapper;