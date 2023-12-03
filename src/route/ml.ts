import express from 'express';
import { MLController } from '../controller/ml.controller';

const router = express.Router();
const mlController = new MLController();

router.post('/ML', mlController.ML);


export default router;