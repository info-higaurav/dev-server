import { NextFunction, Request, Response, Router } from "express";

// import controllers 
import { 
    healthChek,
    registerUser,
    updateUser,
    getUser,
    deleteUser

} from "../controllers/user.controller";


const user = Router()

user.route('/').get(healthChek)
user.route('/register').post(registerUser)
user.route('/update').post(updateUser)
user.route('/get').post(getUser)
user.route('/delete/:id').delete(deleteUser)

export default user;