import express from 'express';
import { InrixController } from '../controller/inrix.controller';

const router = express.Router();
const inrixController = new InrixController();

router.get('/auth', inrixController.auth);
router.get('/lots', inrixController.lots);
router.get('/incident', inrixController.incident);


export default router;