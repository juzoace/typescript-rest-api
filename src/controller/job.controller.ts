import { Request, Response } from "express";
import { any } from "zod";
import { CreateJobInput } from "../schema/job.shema"
import {
    getJobs,
    createJob
} from '../service/job.service';

export async function getJobsHandler(
    req: Request,
    res: Response
) {
    try {
        const jobs = await getJobs();
   
        if (!jobs) {
            return res.sendStatus(404);
          }

        return res.status(200).json({
            success: true,
            data: jobs
        })
    } catch (error: any) {
        res.status(error.response.status).json({
            success: false,
            message: error.message
        })
    }
}

export async function createJobHandler(
    req: Request<{}, {},  CreateJobInput["body"]>,
    res: Response
) {
    const userId = res.locals.user._id;

    const body = req.body;
  
    const job = await createJob({ ...body, user: userId });
  
}