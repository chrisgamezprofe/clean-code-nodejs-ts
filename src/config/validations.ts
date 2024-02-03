import * as EmailValidator from 'email-validator';

export const validateEmail = (email:string) => {
    return EmailValidator.validate(email);
}