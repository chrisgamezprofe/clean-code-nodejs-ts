import { StudentEntity } from "../../entities/student.entity";
import { RegisterStudentDto } from '../../dtos/student/register-student.dto';


export abstract class RegisterStudentDatasource {
    
    abstract register(registerStudentDto: RegisterStudentDto): Promise<StudentEntity>

}