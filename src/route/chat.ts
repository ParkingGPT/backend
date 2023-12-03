import express from 'express';
import { ChatController } from '../controller/chat.controller';

const router = express.Router();
const chatController = new ChatController();

router.post('/message', chatController.chat);

export default router;