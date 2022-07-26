import { Router } from "express";
import { ExampleController } from "../controllers/example.controller";

export const exampleRouter = Router();

const exampleController = new ExampleController();

exampleRouter.get('/example-path', exampleController.exampleMiddleware)
exampleRouter.get('/test-http', exampleController.testHttpMiddleware)
