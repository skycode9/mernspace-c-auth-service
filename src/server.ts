import app from './app.js';
import { Config } from './config/index.js';

console.log(Config.PORT);

const startServer = () => {
    try {
        const PORT = Config.PORT;
        app.listen(PORT, () => {
            console.log(`Server listining on PORT ${PORT}`);
        });
    } catch (error) {
        console.error('Error while start server ', error);
        process.exit(1);
    }
};

startServer();
