import { Express, Request, Response } from "express";
import {
    getJobsHandler,
    createJobHandler
} from './controller/job.controller';
import requireUser from "./middleware/requireUser";
import validateResource from "./middleware/validateResource";
import createJobSchema from "./schema/job.shema"
function routes(app: Express) {


    app.get('/v1/jobs', getJobsHandler);

    app.post('/v1/jobs',
        [requireUser, validateResource(createJobSchema)],
        createJobHandler
    )
}

export default routes;