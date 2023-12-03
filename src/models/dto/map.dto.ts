import Joi from 'joi';

export interface MapGetParams {
    //origin: Waypoint
}

export const MapGetParamsSchema = Joi.object({
    point: Joi.string().required(),
    radius: Joi.number().required(),
    entry_time: Joi.string().required(),
    duration: Joi.number().required()
});

export interface FindPlaceGetParams {
    text: string
}

export const FindPlaceGetParamsSchema = Joi.object({
    text: Joi.string().required()
});

export interface PlaceRatingGetParams {
    id: string
}

export const PlaceRatingGetParamsSchema = Joi.object({
    id: Joi.string().required()
});

export interface StreetViewGetParams {
    location: string,
    size: string,
    key: string
}

export const StreetViewGetParamsSchema = Joi.object({
    location: Joi.string().required(),
    size: Joi.string().required(),
    key: Joi.string().required()
});

export interface PlaceReviewGetParams {
    id: string
}

export const PlaceReviewGetParamsSchema = Joi.object({
    id: Joi.string().required()
});