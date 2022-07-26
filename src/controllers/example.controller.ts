import { Request, Response, NextFunction } from "express";
import { ExampleService } from "../services/example.service";
import { SuccessStatusCode } from "../status-codes";
import Logger from "../utils/Logger";
import { sendResponse } from "../utils/response-wrapper";

export class ExampleController {
    private logger: Logger;
    private exampleService: ExampleService;

    constructor() {
        this.logger = new Logger(this.constructor.name)
        this.exampleService = new ExampleService();

    }

    exampleMiddleware = (request: Request, response: Response, next: NextFunction) => {
        //!Don't use any - always look to specify exact type of payload which you expect to get here  
        const data: any = request.body;

        /*

            This is main try/catch for middleware
            If you want to process more specific errors and do sth based of them
            Place more try/catches inside of try

        */
        try {

            const serviceResponse = this.exampleService.exampleMethod(data);

            sendResponse({ response, status: 200, code: SuccessStatusCode.Success });
        } catch (error) {
            /*
                If this error occurs the response will be sent to the client by calling next(error),
                this will call error-handler middleware responsible for packing up the error response to the client

                Here, you can perform some clean up code.
            */
            next(error);
        }
    }

    testHttpMiddleware = async (request: Request, response: Response, next: NextFunction) => {
        const data:any = request.body;
        try {

            const serviceResponse = await  this.exampleService.testHttpMiddleware(data);

            sendResponse({ response, status: 200, code: SuccessStatusCode.Success, payload: serviceResponse });
        } catch (error) {

            next(error);
        }
    }
}