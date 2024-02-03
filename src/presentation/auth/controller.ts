import { Request, Response } from "express"
import { RegisterStudentDto } from '../../domain/dtos/student/register.dto';



export class AuthController{

    constructor() { }

    registerStudent = (req: Request, res: Response) => {
        try {
            const [error, registerStudentDto] = RegisterStudentDto.create(req.body);
            if (error) return res.status(400).json({ error });
            res.status(201).json(registerStudentDto);
        } catch (err) {
            return res.status(400).json({ error: 'Invalid data' });
        }
    }

    loginStudent = (re:Request, res:Response) => {
        res.json('Login OK')
    }

}