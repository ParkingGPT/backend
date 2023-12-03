import Joi from 'joi';

export interface InrixGetParams {
    point: string;
    radius: number;
    entry_time: string;
    duration: number;
}

export interface InrixIncidentParams {
    point: string;
    radius: number;
}

export interface InrixAuthParams {
    appId: string;
    hashToken: string;
}

export const inrixGetParamsSchema = Joi.object({
    point: Joi.string().optional(),
    radius: Joi.number().required(),
    entry_time: Joi.string().optional(),
    duration: Joi.number().optional()
});

export const inrixIncidentParamsSchema = Joi.object({
    point: Joi.string().optional(),
    radius: Joi.number().required(),
});

export const inrixAuthParamsSchema = Joi.object({
    appId: Joi.string().required(),
    hashToken: Joi.string().required(),
});