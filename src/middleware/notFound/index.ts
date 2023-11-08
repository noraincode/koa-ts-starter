import Koa from 'koa';
import HttpStatus from 'http-status-codes';

export const handleNotFound = () => async (ctx: Koa.Context) => {
    ctx.status = 404;

    ctx.body = {
        meta: {
            code: 40400,
            type: HttpStatus.getStatusText(ctx.status),
            message: `404 - Path ${ctx.path} is not found on our server`
        },
        data: {}
    };
}