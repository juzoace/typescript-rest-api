import mongoose from "mongoose";

export interface JobInput {
    title: string;
    company: string;
    company_logo: string;
    location: string;
    category: string;
    salary: string;
    description: string;
    benefits: string;
    type: string;
    work_condition: string
}

export interface JobDocument extends JobInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date
}

const jobSchema = new mongoose.Schema(
    {
       title : { type: String, required: true, unique: true },
       company : { type: String, required: true, unique: true },
       company_logo : { type: String, required: true, unique: true },
       location : { type: String, required: true, unique: true },
       category : { type: String, required: true, unique: true },
       salary : { type: String, required: true, unique: true },
       description : { type: String, required: true, unique: true },
       benefits : { type: String, required: true, unique: true },
       type : { type: String, required: true, unique: true },
       work_condition : { type: String, required: true, unique: true }
    },
    {
        timestamps: true,
    }
)
const JobModel = mongoose.model<JobDocument>("Job", jobSchema)
export default JobModel;