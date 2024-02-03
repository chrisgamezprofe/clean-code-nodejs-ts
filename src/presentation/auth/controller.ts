import { Request, Response } from "express"
import { RegisterStudentDto, RegisterStudentRepository } from '../../domain';




export class AuthController{

    constructor(
        private readonly registerStudentRepository: RegisterStudentRepository
    ) { }

    registerStudent = (req: Request, res: Response) => {
        const [error, registerStudentDto] = RegisterStudentDto.run(req.body);
        if (error) return res.status(400).json({ error });
            

        this.registerStudentRepository.run(registerStudentDto!)
        .then(student => res.json(student))
        .catch(error => res.status(500).json(error))
    }

    loginStudent = (re:Request, res:Response) => {
        res.json('Login OK')
    }

}