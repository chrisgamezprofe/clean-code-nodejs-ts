

export class StudentEntity{

    constructor(
        public id: string,
        public name: string[],
        public nationality: string[],
        public career: string[],
        public email: string,
        public password: string,
        public phone?: string,
        public image?: string,
        public age?: number
    ) { }
    
}