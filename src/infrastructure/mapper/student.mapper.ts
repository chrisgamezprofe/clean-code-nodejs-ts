import { CustomError, StudentEntity } from "../../domain";


export class StudentMapper {
    static studentEntityFromObject(object: {[key: string]: any}) {
        
        const { id, _id, name, email, password, career, nationality } = object;
        
        if(!_id || !id) throw CustomError.badRequest('Missing id');
        if(!name) throw CustomError.badRequest('Missing name');
        if(!email) throw CustomError.badRequest('Missing email');
        if(!password) throw CustomError.badRequest('Missing password');
        if(!career) throw CustomError.badRequest('Missing career');
        if(!nationality) throw CustomError.badRequest('Missing nationality');


        return new StudentEntity(
            id || _id, name, nationality,career, email, password, 
        );
    
    }
}