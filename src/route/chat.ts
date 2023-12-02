import express from 'express';
import { ChatController } from '../controller/chat.controller';

const router = express.Router();
const chatController = new ChatController();

router.post('/user-input', chatController.processUserInput);

export default router;