import {
  DocumentDefinition,
  FilterQuery,
  QueryOptions,
  UpdateQuery
} from 'mongoose';
import JobModel, {JobDocument } from '../models/job.model';

export async function getJobs() {
  try {
    
    const jobs = await JobModel.find({}).sort({created_at:-1},).limit(20)
    if (!jobs) return {
      data: {}
    };
    return jobs;
  } catch(error: any) {
    return error;
  }
}

export async function createJob(
  input: DocumentDefinition<
  Omit<JobDocument, "createdAt" | "updatedAt" | "productId"> 
>
  ) {

    try {
      const createdJob = await JobModel.create(input);
      if (!createdJob) return {
        data: {}
      }
      return createdJob
    } catch (error: any) {
      return error;
    }
    
}