import Joi from 'joi';

export interface InrixGetParams {
    point: string;
    radius: number;
    entry_time: string;
    duration: number;
}

export const inrixGetParamsSchema = Joi.object({
    point: Joi.string().optional(),
    radius: Joi.number().required(),
    entry_time: Joi.string().required(),
    duration: Joi.number().required()
});