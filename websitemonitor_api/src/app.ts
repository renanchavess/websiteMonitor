import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cron from 'node-cron';

import siteRoute from './routes/site.route';
import siteAviableHistoryRoute from './routes/siteAviableHistory.route';
import monitorRoute from './routes/monitor.route';
import monitorService from './service/monitor.service';

export class App {
    private express: express.Application;
    private porta = 9000;

    constructor() {
        this.express = express();
        this.services();
        this.listen();
        this.database();
        this.middlewares();
        this.routes();
        
    }

    public getApp(): express.Application {
        return this.express;
    }

    private routes(): void {
        this.express.use('/site', siteRoute);
        this.express.use('/site/aviablehistory', siteAviableHistoryRoute);
        this.express.use('/monitor', monitorRoute);
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private listen(): void {
        this.express.listen(this.porta, () => {
            console.log('Servidor iniciado na porta ' + this.porta);
        });
    }

    private services() {
        cron.schedule("* * * * *", monitorService.checkAvailability);
    }

    private database(): void {
        mongoose.connect('mongodb+srv://renan:r8541918@cluster0.ejzqm.mongodb.net/<dbname>?retryWrites=true&w=majority',{
            useUnifiedTopology: true,
            useNewUrlParser: true,            
        });
    }
}