import Joi from 'joi';

export interface ChatPostParams{
    uuid: string;
    messages: ChatMessage[];
    type: string;
}

export const chatPostParamsSchema = Joi.object({
    uuid: Joi.string().required(),
    messages: Joi.array().items(Joi.object({
        role: Joi.string().required(),
        content: Joi.string().required()
    })).required(),
    type: Joi.string().required()
});

export interface ChatMessage {
    role: string;
    content: string;
}