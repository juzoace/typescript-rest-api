import { object, string, TypeOf } from "zod";

// export const createJobSchema = object({
    const payload = {
        body: object({
        title : string({
            required_error: "Title is required",
        }),
        company: string({
            required_error: "Company is required",
        }),
        company_logo: string({
            required_error: "Company logo is required",
        }),
        location: string({
            required_error: "Location is required",
        }),
        category: string({
            required_error: "Category is required",
        }),
        salary: string({
            required_error: "Salary is required",
        }),
        description: string({
            required_error: "Description is required",
        }),
        benefits: string({
            required_error: "Benefits is required",
        }),
        type: string({
            required_error: "Type is required",
        }),
        work_condition: string({
            required_error: "Work condition is required",
        }),
    })
}

const params = {
    params: object({
      productId: string({
        required_error: "jobId is required",
      }),
    }),
};

export const createJobSchema = object({
    ...payload,
  });

export type CreateJobInput = TypeOf<typeof createJobSchema>;

