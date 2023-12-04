import express from "express";
import logger from "./logging/loggerFactory";
import { Env } from "./env";
import InrixRoute from "./route/inrix";
import MapRoute from "./route/map";
import ChatRoute from "./route/chat";
import MLRoute from "./route/ml";
import cors from 'cors';

// Configure and start the HTTP server.
const app = express();
app.use(express.json());   // using integrated body-parser
app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/api/inrix', InrixRoute);
app.use('/api/map', MapRoute);
app.use('/api/chat', ChatRoute);
app.use('/api/ml', MLRoute)

app.listen(Env.PORT, () => logger.info(`Server started on port ${Env.PORT}`));