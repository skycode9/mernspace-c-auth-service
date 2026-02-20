import express, { type Request, type Response } from 'express';
import logger from './config/logger.js';
import type { HttpError } from 'http-errors';
import createHttpError from 'http-errors';

const app = express();

app.get('/', (_req, res) => {
    const error = createHttpError(401, 'You can not access this route');
    throw error;
    // next(error);
    res.status(200).json({
        message: 'Welcome to auth service',
    });
});

// global error handler

app.use((err: HttpError, _req: Request, res: Response) => {
    logger.error(err.message);
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                msg: err.message,
                path: '',
                location: '',
            },
        ],
    });
});

export default app;
