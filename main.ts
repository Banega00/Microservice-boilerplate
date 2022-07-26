import { config } from "dotenv";
config();

import { createServer } from "http";
import app from "./src/app";
import { env } from "./src/utils/env-wrapper";
import Logger from "./src/utils/Logger";

const logger = new Logger('Main');



(async function main(): Promise<void> {

    try {
        
        const PORT = env.port || 8080;
        createServer(app).listen(PORT);

        logger.info(`✅ - Server is up, listening on port ${PORT}`)

    } catch (error) {
        logger.error('❌', error)
        process.exit(-1);
    }
})();
