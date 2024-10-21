import { NextFunction, Request, Response } from "express"

type AsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<any>

const asyncHandler = (fn: AsyncHandler) =>{

    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            await fn(req, res, next)
        } catch (error) {
            next(error)        
        }
    }
}

export default asyncHandler;