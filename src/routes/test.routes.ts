import { Request, Response, Router } from "express";
import { healthCheck } from "../controllers/healthCheck.controller";

const health = Router()

health.route('/').get(healthCheck)

export default health;