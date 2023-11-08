import Koa from 'koa';
import cors from '@koa/cors';
import KoaRouter from 'koa-router';

import bodyParser from 'koa-bodyparser';
import responseTime from 'koa-response-time';
import koaLogger from 'koa-pino-logger';

import { routes } from './routes';
import * as config from '@/config';
import { decorateBody } from '@/middleware/decorateBody';
import { handleNotFound } from '@/middleware/notFound';

export const initApp = async () => {
    const app = new Koa();

    app
        .use(koaLogger())
        .use(bodyParser())
        .use(decorateBody())

    if (config.ENV === "development") {
        app
            .use(cors())
            .use(responseTime())
    }

    app.on('error', (err: Error, ctx: Koa.Context) => {
        ctx.log.error({
            log_type: 'app-level-error',
            message: err.message,
            stack: err.stack
        });
    })

    const router = new KoaRouter();
    routes.forEach(route => {
        // @ts-ignore
        router[route.method](route.path, route.handler)
    })

    app
        .use(router.routes())
        .use(router.allowedMethods())
        .use(handleNotFound())

    return app;
}