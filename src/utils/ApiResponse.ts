import { Response } from "express";

class ApiResponse {
    data : [] | {};
    message : string;
    statusCode : number;

    constructor(data : [] | {} , message : string , statusCode : number){
        this.data=data;
        this.message=message;
        this.statusCode=statusCode;
    }

    static success (data : [] | {}, message : string , statusCode : number ){
        return new ApiResponse (data , message , statusCode)
    }

    static failure (data : [] | {}, message : string , statusCode : number ){
        return new ApiResponse (data , message , statusCode)
    }

    send (res : Response){
       res.status(this.statusCode).json(this)
    }

}

export default ApiResponse;