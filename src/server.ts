import app from './app.js';
import { Config } from './config/index.js';
import logger from './config/logger.js';

const startServer = () => {
    try {
        const PORT = Config.PORT;
        app.listen(PORT, () => {
            logger.info(`Server listening on PORT ${PORT}`);
        });
    } catch (error) {
        console.error('Error while start server ', error);
        process.exit(1);
    }
};

startServer();
