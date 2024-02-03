import { validateEmail } from "../../../config/validations";


export class RegisterStudentDto{
    private constructor(
        public name: string[],
        public nationality: string[],
        public career: string[],
        public email: string
    ) { }
    
    static run(object: { [key: string]: any }): [string?,RegisterStudentDto?]{
        
        const { name,nationality,career,email} = object;  

        if (!name) return ['Missing name'];  
        if (!nationality) return ['Missing nationality'];  
        if (!career) return ['Missing career'];  
        if (!email) return ['Missing email'];  
        if(!validateEmail(email)) return ['Invalid Email Format']  ;
        
        return [
            undefined,
            new RegisterStudentDto(name, nationality, career, email)
        ];

    }

}