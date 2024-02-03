import { BcryptAdapter } from "../../../config";
import { StudentModel } from "../../../data/mongodb";
import { CustomError, RegisterStudentDatasource, RegisterStudentDto, StudentEntity } from "../../../domain";


type HashPassword = (password: string) => string;
type ComparePassword = (password: string, hashed:string) => boolean;


export class RegisterStudentMongoDatasourceImpl implements RegisterStudentDatasource{

    constructor(
        private readonly hashPassword:HashPassword = BcryptAdapter.hash,
        private readonly comparePassword:ComparePassword = BcryptAdapter.compare
    ){}
    async register(registerStudentDto: RegisterStudentDto): Promise<StudentEntity> {
        const { name, nationality, career, email, password } = registerStudentDto;  
        try {

            const emailExists = await StudentModel.findOne({ email }); 
            
            if (emailExists) throw CustomError.badRequest('Email already in use');

            const student = await StudentModel.create({
                name,
                nationality,
                career,
                email,
                password: this.hashPassword(password)
            });

            await student.save();
            
            return new StudentEntity(
                student.id,
                name,
                nationality,
                career,
                email,
                student.password
            );
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServerError();
        }
    }
}