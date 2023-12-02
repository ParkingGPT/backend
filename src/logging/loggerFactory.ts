import pino from 'pino';
import { Env } from '../env';

class LoggerFactory {
    private _logger: pino.Logger;

    constructor() {
        this._logger = pino({ level: Env.TEST ? "error" : (Env.DEBUG ? "debug" : "info") });
    }

    public get logger(): pino.Logger {
        return this._logger;
    }
}

const logger = new LoggerFactory().logger;
export default logger;