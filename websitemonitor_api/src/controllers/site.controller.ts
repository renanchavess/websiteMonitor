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
            message: 'site created success',
            _id: site._id,
            name: site.name,
            url: site.url
        }
        return res.json(response);
    }

    public async listAll(req: Request, res: Response): Promise<Response> {

        const list = await siteModel.find();

        return res.status(200).send(list);
    }


    public async delete(req: Request, res:Response): Promise<Response> {
        const status = await siteModel.deleteOne({ _id: req.params.id });
        return res.status(201).send(status);
    }

    public async edit(req: Request, res:Response): Promise<Response> {
        const site = await siteModel.findOne({ _id: req.params.id });
        return res.status(200).send(site);
    }

    public async update(req: Request, res:Response): Promise<Response> {
        console.log(req.body);
        const site = await siteModel.findOneAndUpdate( { _id: req.body.id } ,{
            name: req.body.name,
            url: req.body.url
        });
        console.log(site);
        return res.status(201).send(site);
    }
}

export default new SiteController;