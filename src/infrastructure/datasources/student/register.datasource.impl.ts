import { CustomError, RegisterStudentDatasource, RegisterStudentDto, StudentEntity } from "../../../domain";



export class RegisterStudentDatasourceImpl implements RegisterStudentDatasource{
    async register(registerStudentDto: RegisterStudentDto): Promise<StudentEntity> {
        const { name, nationality, career, email } = registerStudentDto;  
        try {
            //verificar
            if('c@c.com'===email) throw CustomError.badRequest("Email already registered"); 
            
            return new StudentEntity(
                '1',name,nationality,career,email,'321546987'
            );
        } catch (error) {
            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServerError();
        }
    }
}