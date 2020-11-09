import net from 'net';
import siteModel from '../models/site.model';
import siteAviableHistoryModel from '../models/siteAviableHistory.model';

import { Request, Response } from 'express';

class MonitorController {
    
    public async checkAvailability(req: Request, res: Response): Promise<Response>{

        const sites = await siteModel.find();
        console.log(sites);

        sites.forEach(await async function(site) {
            var sock = new net.Socket();
            sock.setTimeout(2500);
            sock.on('connect', async function() {
                console.log(site.url+':80 is up.');
                const history = await siteAviableHistoryModel.create({
                    date: new Date(),
                    aviable: true,
                    site: site._id
                });
                console.log(history);
                sock.destroy();
            }).on('error', await async function(e) {
                console.log(site.url+':80+ is down: ' + e.message);
                const history = await siteAviableHistoryModel.create({
                    date: new Date(),
                    aviable: false,
                    site: site._id
                });
            }).on('timeout', await async function(e) {
                console.log(site.url+':80 is down: timeout');
                const history = await siteAviableHistoryModel.create({
                    date: new Date(),
                    aviable: false,
                    site: site._id
                });
            }).connect(80,site.url);
        });

        return res.status(200).send('teste');
    }
}

export default new MonitorController();