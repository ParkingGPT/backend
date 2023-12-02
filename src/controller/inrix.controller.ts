import { Request, Response } from 'express';
import { InrixService } from '../service/inrix.service';

export class InrixController {
    private inrixService: InrixService;

    constructor() {
        this.inrixService = new InrixService();
    }

    public test = async (_req: Request, res: Response) => {
        try {
            // const input = req.body.input;
            const result = await this.inrixService.test();
            res.json(result);
        } catch (error) {
            res.status(500).send(error);
        }
    };
}