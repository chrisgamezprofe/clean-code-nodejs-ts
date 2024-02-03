import { RegisterStudentDatasource, RegisterStudentDto, RegisterStudentRepository, StudentEntity } from "../../../domain";


export class RegisterStudentRepositoryImpl implements RegisterStudentRepository{
    constructor(
        private readonly registerStudentDatasource: RegisterStudentDatasource,
    ) { }
    
    register(RegisterStudentDto: RegisterStudentDto): Promise<StudentEntity>{
        return this.registerStudentDatasource.register(RegisterStudentDto);
    }
}