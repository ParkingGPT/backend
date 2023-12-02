import express from "express";
import logger from "./logging/loggerFactory";
import { Env } from "./env";
import InrixRoute from "./route/inrix";

// Configure and start the HTTP server.
const app = express();
app.use(express.json());   // using integrated body-parser

app.use('/api/inrix', InrixRoute);

app.listen(Env.PORT, () => logger.info(`Server started on port ${Env.PORT}`));