import { Router } from "express";
import { AuthController } from "./controller";
import { RegisterStudentRepositoryImpl } from './../../infrastructure';
import { RegisterStudentMongoDatasourceImpl } from "../../infrastructure/datasources/student/register.mongodatasource.impl";


export class AuthRoutes{

    static get routes():Router {
        const router = Router();

        const mongodatasource = new RegisterStudentMongoDatasourceImpl();
        const registerStudentRepository = new RegisterStudentRepositoryImpl(mongodatasource);
        const controller = new AuthController(registerStudentRepository);
        

        router.post('/login', controller.loginStudent);
        router.post('/register',controller.registerStudent);

        return router;
    }



}