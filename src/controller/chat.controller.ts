import { Request, Response } from 'express';
import { ChatService } from '../service/chat.service';

export class ChatController {
    private chatService: ChatService;

    constructor() {
        this.chatService = new ChatService();
    }

    public processUserInput = async (req: Request, res: Response) => {
        try {
            const input = req.body.input;
            const result = await this.chatService.processInput(input);
            res.json(result);
        } catch (error) {
            res.status(500).send(error);
        }
    };
}