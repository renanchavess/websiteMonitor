import { Router } from "express";
import MonitorController from '../controllers/monitor.controller';
const siteRouter = Router();

siteRouter.get('/', MonitorController.checkAvailability);
export default siteRouter;