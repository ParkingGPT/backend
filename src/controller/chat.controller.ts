import { Request, Response } from 'express';
import { ChatService } from '../service/chat.service';
import * as dto from "../models/dto/chat.dto"

export class ChatController {
    private chatService: ChatService;

    constructor() {
        this.chatService = new ChatService();
    }

    public chat = async (req: Request, res: Response) => {
        try {
            const { error, value } = dto.chatPostParamsSchema.validate(req.body);
            if (error) { 
                return res.status(400).send(error);
            }
            const result = await this.chatService.chat(value);
            return res.json(result);
        } catch (error) {
            return res.status(500).send(error);
        }
    };
}