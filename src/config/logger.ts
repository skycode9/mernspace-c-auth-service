import winston from 'winston';
import { Config } from './index.js';

const logger = winston.createLogger({
    level: 'info',
    defaultMeta: {
        serviceName: 'auth-service',
    },
    transports: [
        new winston.transports.File({
            level: 'error',
            dirname: 'logs',
            filename: 'error.log',
            format: winston.format.combine(
                winston.format.json(),
                winston.format.timestamp(),
                winston.format.prettyPrint(),
            ),
            //silent: Config.NODE_ENV == 'development',
        }),
        new winston.transports.File({
            level: 'info',
            dirname: 'logs',
            filename: 'combined.log',
            format: winston.format.combine(
                winston.format.json(),
                winston.format.timestamp(),
                winston.format.prettyPrint(),
            ),
            silent: Config.NODE_ENV == 'development',
        }),
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.json(),
                winston.format.timestamp(),
                winston.format.prettyPrint(),
            ),
            silent: Config.NODE_ENV == 'development',
        }),
    ],
});

export default logger;
