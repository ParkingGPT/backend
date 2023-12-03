import express from "express";
import logger from "./logging/loggerFactory";
import { Env } from "./env";
import InrixRoute from "./route/inrix";
import MapRoute from "./route/map";
import ChatRoute from "./route/chat";
import MLRoute from "./route/ml"
//import fs from 'fs';
//import path from 'path';
//Env.CHAT_INIT_PROMPT = fs.readFileSync(path.resolve(__dirname, './prompts/init.txt'), 'utf8').trim();



// Configure and start the HTTP server.
const app = express();
app.use(express.json());   // using integrated body-parser

app.use('/api/inrix', InrixRoute);
app.use('/api/map', MapRoute);
app.use('/api/chat', ChatRoute);
app.use('/api/ml', MLRoute)

app.listen(Env.PORT, () => logger.info(`Server started on port ${Env.PORT}`));