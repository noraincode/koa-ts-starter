import http from 'http';
import { SignalConstants } from 'os';

import { initApp } from '@/app';
import logger from '@/logger';
import * as config from '../config';


export default (async () => {
    const app = await initApp();

    const port = config.PORT || 2213
    const server = http.createServer(app.callback()).listen(port);

    logger.info(`Server listening on port ${port}, check http://localhost:${port}/whoami`);

    const gracefulClose = (signal: SignalConstants) => {
        server.close(() => {
            logger.info(`Server closed due to ${signal} signal`)
            process.exit()
        })
    }

    process.on('SIGINT',  gracefulClose)
    process.on('SIGTERM', gracefulClose)
})()
