// route
// getStreetView
// getScore
// getReview
import express from 'express';
import { MapController } from '../controller/map.controller';

const router = express.Router();
const mapController = new MapController();

router.get('/findplace', mapController.findPlace);
router.get('/placerating', mapController.placeRating);
router.get('/streetview', mapController.streetView);

export default router;