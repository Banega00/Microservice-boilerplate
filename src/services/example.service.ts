import Logger from "../utils/Logger"

//This is Service
//Its responsibility is to execute specific functions without knowledge of request, and response objects
export class ExampleService{
    private logger:Logger;

    constructor() {
        this.logger = new Logger(this.constructor.name)
        
        // this.logger.info('Example Service initialized')
    }

    //If you want to return error response from here, just throw an error which will be handled in middleware's try/catch
    exampleMethod = (data:any) =>{
        this.logger.info(`Example method reached - ${data}`)
        return;
    }
}