import { Request, Response } from 'express';
import { InrixService } from '../service/inrix.service';
import * as dto from "../models/dto/inrix.dto"
import logger from "../logging/loggerFactory";
export class InrixController {
    private inrixService: InrixService;

    constructor() {
        this.inrixService = new InrixService();
    }

    public lots = async (req: Request, res: Response) => {
        const {error, value} = dto.inrixGetParamsSchema.validate(req.query);
        logger.info(req.query)
        if(error){
            logger.error(error)
            res.status(400).send("Invalid parameters: " + error.message);
        }else{
            const result = await this.inrixService.lots(value);
            res.status(200).json(result)
        }
    };

    public incident = async (req: Request, res: Response) => {
        const {error, value} = dto.inrixIncidentParamsSchema.validate(req.query);
        logger.info(req.query)
        if(error){
            logger.error(error)
            res.status(400).send("Invalid parameters: " + error.message);
        }else{
            const result = await this.inrixService.incident(value);
            res.status(200).json(result)
        }
    };

    public auth = async (req: Request, res: Response) => {
        const {error, value} = dto.inrixAuthParamsSchema.validate(req.query);
        logger.info(req.query)
        if(error){
            logger.error(error)
            res.status(400).send("Invalid parameters: " + error.message);
        }else{
            const result = await this.inrixService.auth(value);
            res.status(200).json(result)
        }
    };
}