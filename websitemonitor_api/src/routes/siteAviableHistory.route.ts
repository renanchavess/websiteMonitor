import { Router } from "express";
import siteAviableHistoryController from '../controllers/siteAviableHistory.controller';
const siteAviableHistoryRouter = Router();

siteAviableHistoryRouter.get('/:id', siteAviableHistoryController.getBySiteId);

export default siteAviableHistoryRouter;