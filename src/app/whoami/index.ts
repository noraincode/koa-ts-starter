import Koa from 'koa';
import path from 'path';

type BuildVersion = {
    version: string
    name: string
}

export default [
    {
        path: '/whoami',
        method: 'get',
        handler: async (ctx: Koa.Context) => {
            const build = await import(path.resolve(__dirname, '../../../build.json'));

            ctx.status = 200;
            ctx.type = 'application/json';
            ctx.body = {
                name: (build as BuildVersion)?.name || 'product.cybyte.com_easyread',
                version: (build as BuildVersion)?.version || 'v0.0.1',
            }
        }
    }
]