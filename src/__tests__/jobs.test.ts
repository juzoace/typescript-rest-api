import supertest from 'supertest';
import { MongoMemoryServer } from "mongodb-memory-server";
import createServer from '../utils/server';
import mongoose from "mongoose";
import { object } from 'zod';

const app = createServer();

describe('jobs', () => {

    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();
    
        await mongoose.connect(mongoServer.getUri());
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoose.connection.close();
    });
    

    describe('get jobs route', () => {
        describe('given that there is a list of jobs in the database', () => {
            it('should return a 200 status and all jobs in the database', async () => {
                const {body} = await supertest(app).get('/v1/jobs')
            // console.log(result)
                // expect(body).toBe(object);
                
            });
            
        
        })
    })

    describe('post job route', () => {
        describe('given that the user is logged in ', () => {
            it ( "should create a new job in the db" , async() => {

            } )
        });

        describe("given the user is not logged in", () => {
            it("should return a 403", async () => {
                const { statusCode } = await supertest(app).post("/api/products");

            })
        })
    })
})