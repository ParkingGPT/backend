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
  pct: Joi.number().required(),
  probability: Joi.number().required(),
  available: Joi.number().required(),
  distance: Joi.number().required(),
  price: Joi.number().required(),
  stars: Joi.number().required(),
  construction: Joi.number().required(),
  events: Joi.number().required(),
  congestion: Joi.number().required(),
  hazards: Joi.number().required(),
});