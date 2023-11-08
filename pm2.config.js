const { name } = require('./package.json');
const path = require('path');

module.exports = {
    apps: [
        {
            name,
            script: "./dist/server/index.js",
            'pre-setup': "npm install && npm run build",
            args: "run start",
            env_production: {
                NODE_ENV: "production",
                PORT: 2213,
            },
            env_development: {
                NODE_ENV: "development",
                PORT: 2213,
            },
            shutdown_with_message: true,
            instances: 2,
            autorestart: false,
            watch: false,
            max_restarts: 5,
            out_file: "./log/out.log",
            error_file: "./log/error.log"
        }
    ]
};