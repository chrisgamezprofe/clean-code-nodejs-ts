import { StudentEntity } from "../../entities/student.entity";
import { RegisterStudentDto } from '../../dtos/student/register.dto';


export abstract class RegisterStudentDatasource {
    
    abstract register(registerStudentDto: RegisterStudentDto): Promise<StudentEntity>

}