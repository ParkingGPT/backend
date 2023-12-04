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

export interface ParkingLot {
    name: string;
    buildingAddress: BuildingAddress;
    occupancy: Occupancy;
    distance: number;
    costIndex: number; // price
    reviewScore: number; // stars
}

export interface ParkingLotPredictParams{
    name: string;
    address: BuildingAddress;
    pct:number,
    probability:number,
    available:number,
    distance:number,
    price:number,
    stars:number,
}

interface BuildingAddress {
    house_number: number | null;
    street_name: string | null;
    street: string;
    city: string;
    state: string;
    postal: string;
    country: string;
    type: string;
}

interface Occupancy {
    pct: number;
    probability: number;
    rank: number;
    bucket: number;
    available: number;
}

export const ParkingLotSchema = Joi.object({
    name: Joi.string().required(),
    buildingAddress: Joi.object({
        street: Joi.string().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        postal: Joi.string().required(),
        country: Joi.string().required(),
        type: Joi.string().required(),
    }).required().unknown(true),
    occupancy: Joi.object({
        pct: Joi.number().required(),
        probability: Joi.number().required(),
        rank: Joi.number().required(),
        bucket: Joi.number().required(),
        available: Joi.number().required(),
    }).required(),
    distance: Joi.number().required(),
    costIndex: Joi.number().required(),
    reviewScore: Joi.number().required(),
}).unknown(true);