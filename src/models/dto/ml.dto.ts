import Joi from 'joi';
export interface MLGetParams{
  pct:number,
  probability:number,
  available:number,
  distance:number,
  price:number,
  stars:number,
  construction: number,
  events:number,
  congestion:number,
  hazards:number
}

export const MLGetParamsSchema = Joi.object({
  pct: Joi.number().optional(),
  probability: Joi.number().optional(),
  available: Joi.number().optional(),
  distance: Joi.number().optional(),
  price: Joi.number().optional(),
  stars: Joi.number().optional(),
  construction: Joi.number().optional(),
  events: Joi.number().optional(),
  congestion: Joi.number().optional(),
  hazards: Joi.number().optional(),
});