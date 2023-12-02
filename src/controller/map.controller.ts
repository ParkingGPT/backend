import { Request, Response } from 'express';
import { MapService } from '../service/map.service';

export class MapController {
    private mapService: MapService;

    constructor() {
        this.mapService = new MapService();
    }

    public test = async (_req: Request, res: Response) => {
        try {
            // const input = req.body.input;
            const result = await this.mapService.test();
            res.json(result);
        } catch (error) {
            res.status(500).send(error);
        }
    };
}