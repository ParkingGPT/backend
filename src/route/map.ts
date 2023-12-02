// route
// getStreetView
// getScore
// getReview
import express from 'express';
import { MapController } from '../controller/map.controller';

const router = express.Router();
const mapController = new MapController();

router.get('/test', mapController.test);

export default router;