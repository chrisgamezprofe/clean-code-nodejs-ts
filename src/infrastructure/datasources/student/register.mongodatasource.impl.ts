import { BcryptAdapter } from "../../../config";
import { StudentModel } from "../../../data/mongodb";
import { CustomError, RegisterStudentDatasource, RegisterStudentDto, StudentEntity } from "../../../domain";



export class RegisterStudentMongoDatasourceImpl implements RegisterStudentDatasource{
    async register(registerStudentDto: RegisterStudentDto): Promise<StudentEntity> {
        const { name, nationality, career, email, password } = registerStudentDto;  
        try {
            //verificar
            const emailExists = await StudentModel.findOne({ email }); 
            
            if (emailExists) throw CustomError.badRequest('Email already in use');

            const student = await StudentModel.create({
                name,
                nationality,
                career,
                email,
                password:BcryptAdapter.hash(password)
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