import { RegisterStudentDto } from "../../dtos/student/register-student.dto";
import { StudentEntity } from "../../entities/student.entity";


export abstract class RegisterStudentRepository {
    
    abstract register(registerStudentDto: RegisterStudentDto): Promise<StudentEntity>

}