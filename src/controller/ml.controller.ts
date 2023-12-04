import { Request, Response } from 'express';
import { MLService } from "../service/ml.service";
import * as dto from "../models/dto/ml.dto"
import logger from '../logging/loggerFactory';

export class MLController {
  private mlService: MLService;

  constructor() {
      this.mlService = new MLService();
  }


public ML = async (req: Request, res: Response) => {
  logger.info(req)
  const {error, value} = dto.MLGetParamsSchema.validate(req.body);
  if(error){
      logger.error(error)
      res.status(400).send("Invalid parameters: " + error.message);
  } else {
      const result = await this.mlService.ML(value);
      res.status(200).json(result)
  }
};
}