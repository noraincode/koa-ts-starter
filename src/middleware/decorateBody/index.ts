import Koa from 'koa';
import HttpStatus from 'http-status-codes';

export const decorateBody = () => async (ctx: Koa.Context, next: Koa.Next) => {
    try {
        await next();
    } finally {
        if (ctx.body) {
            if (typeof ctx.body === 'object' && !('meta' in ctx.body)) {
                ctx.body = {
                    meta: {
                        code: ctx.status * 100,
                        type: HttpStatus.getStatusText(ctx.status),
                        message:
                            ctx.message ||
                            HttpStatus.getStatusText(ctx.status) ||
                            ''
                    },
                    data: ctx.body
                };
            }
        }
    }
}