import { Response } from "express";

class ApiResponse {
    data:[] | any;
    message:String;
    statusCode:number;
    constructor(data:[] | any,message:String,statusCode:number){
        this.data=data;
        this.message=message;
        this.statusCode=statusCode;
    }

    static success (data:[] | any,message:String,statusCode:number){
        return new ApiResponse(data , message , statusCode)
    }

    static failure (data:[] | any,message:String,statusCode:number){
        return new ApiResponse(data , message , statusCode)
    }

    send(res:Response){
        res.status(this.statusCode).send(this)
    }
}

export default ApiResponse;