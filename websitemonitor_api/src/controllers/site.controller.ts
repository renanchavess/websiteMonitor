import { Request, Response } from 'express';
import siteModel from '../models/site.model';

class SiteController {

    public async store(req: Request, res: Response): Promise<Response> {

        const { name, url } = req.body;

        if ( name == null || url == null) {
            return res.status(400).json("Bad Request");
        }

        const site = await siteModel.create({ name: name, url: url});
        const response = {
            message: 'site created sucess',
            _id: site._id,
            name: site.name,
            url: site.url
        }
        return res.json(response);
    }
}

export default new SiteController;