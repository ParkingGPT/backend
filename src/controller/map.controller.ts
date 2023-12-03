import { Request, Response } from 'express';
import { MapService } from '../service/map.service';
import * as dto from "../models/dto/map.dto"

export class MapController {
    private mapService: MapService;

    constructor() {
        this.mapService = new MapService();
    }

    public test = async (_req: Request) => {
        // const {error, value} = dto.FindPlaceGetParamsSchema.validate(req.query);
        // if (error) {
        //     res.status(400).send("Invalid parameters: " + error.message);
        // }
        // else{
        //     const result = await this.inrixService.lots(value);
        //     res.status(200).json(result)
        // }
    };

    public findPlace = async (req: Request, res: Response) => {
        const {error, value} = dto.FindPlaceGetParamsSchema.validate(req.query);
        if (error) {
            res.status(400).send("Invalid parameters: " + error.message);
        }
        else{
            const result = await this.mapService.findPlace(value);
            res.status(200).json(result)
        }
    }

    public placeRating = async (req: Request, res: Response) => {
        const {error, value} = dto.PlaceRatingGetParamsSchema.validate(req.query);
        if (error) {
            res.status(400).send("Invalid parameters: " + error.message);
        }
        else{
            const result = await this.mapService.placeRating(value);
            res.status(200).json(result)
        }
    }

    public streetView = async (req: Request, res: Response) => {
        const {error, value} = dto.StreetViewGetParamsSchema.validate(req.query);
        if (error) {
            res.status(400).send("Invalid parameters: " + error.message);
        }
        else{
            const result = await this.mapService.streetView(value);
            res.status(200).json(result)
        }
    }

    public placeReview = async (req: Request, res: Response) => {
        const {error, value} = dto.PlaceReviewGetParamsSchema.validate(req.query);
        if (error) {
            res.status(400).send("Invalid parameters: " + error.message);
        }
        else{
            const result = await this.mapService.placeReview(value);
            res.status(200).json(result)
        }
    }
}