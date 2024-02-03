import { RegisterStudentDto } from "../../dtos/student/register.dto";
import { StudentEntity } from "../../entities/student.entity";


export abstract class RegisterStudentRepository {
    
    abstract run(registerStudentDto: RegisterStudentDto): Promise<StudentEntity>

}