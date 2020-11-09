import { Router } from "express";
import siteController from '../controllers/site.controller';
const siteRouter = Router();

siteRouter.post('/', siteController.store);
siteRouter.get('/', siteController.listAll);
siteRouter.delete('/:id', siteController.delete);
siteRouter.get('/:id', siteController.edit);
siteRouter.put('/', siteController.update)
export default siteRouter;