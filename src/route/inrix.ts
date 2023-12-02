import express from 'express';
import { InrixController } from '../controller/inrix.controller';

const router = express.Router();
const inrixController = new InrixController();

router.get('/test', inrixController.test);

export default router;