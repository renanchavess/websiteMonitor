import { Request, Response } from 'express';
import siteModel from '../models/site.model';

import siteAviableHistoryModel from '../models/siteAviableHistory.model';

class SiteController {

    public async getBySiteId(req: Request, res: Response): Promise<Response> {
        const site = await siteModel.findOne({ _id: req.params.id});
        const history = await siteAviableHistoryModel.find({ site: site._id});
        return res.json(history);
    }
}

export default new SiteController;