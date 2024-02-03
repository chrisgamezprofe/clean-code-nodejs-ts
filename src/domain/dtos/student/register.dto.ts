import { validateEmail } from "../../../config";


export class RegisterStudentDto{
    private constructor(
        public name: string[],
        public nationality: string[],
        public career: string[],
        public email: string,
        public password: string
    ) { }
    
    static run(object: { [key: string]: any }): [string?,RegisterStudentDto?]{
        
        const { name,nationality,career,email, password} = object;  

        if (!name) return ['Missing name'];  
        if (!nationality) return ['Missing nationality'];  
        if (!career) return ['Missing career'];  
        if (!email) return ['Missing email'];  
        if (!password) return ['Missing password'];  
        if(!validateEmail(email)) return ['Invalid Email Format']  ;
        
        return [
            undefined,
            new RegisterStudentDto(name, nationality, career, email, password)
        ];

    }

}