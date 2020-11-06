import { Router } from "express";
import siteController from '../controllers/site.controller';
const userRouter = Router();

userRouter.post('/', siteController.store);
export default userRouter;