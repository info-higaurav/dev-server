import { NextFunction, Request, Response, Router } from "express";

// import controllers 
import { healthChek } from "../controllers/user.controller";


const user = Router()

user.route('/').get(healthChek)

export default user;