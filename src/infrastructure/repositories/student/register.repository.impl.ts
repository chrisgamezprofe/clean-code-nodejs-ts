import { RegisterStudentDatasource, RegisterStudentDto, RegisterStudentRepository, StudentEntity } from "../../../domain";


export class RegisterStudentRepositoryImpl implements RegisterStudentRepository{
    constructor(
        private readonly registerStudentDatasource: RegisterStudentDatasource,
    ) { }
    
    run(RegisterStudentDto: RegisterStudentDto): Promise<StudentEntity>{
        return this.registerStudentDatasource.register(RegisterStudentDto);
    }
}