import express from 'express'

function createServer() {
    const app = express();

    app.use(express.json());
    console.log('wored')
    return app;
}

export default createServer;