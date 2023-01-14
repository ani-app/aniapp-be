import { ThrowError } from "./validationResponse"
const ValidationRules = {
    name : {
        CREATE_REQUIRED : true,
        MAX_LENGTH : 32,
        MIN_LENGTH : 2,
        NOT_EMPTY : true,
        TYPE : "string"
    }
}

export function CreateValidate(gender) {

    // name field validations
    if (ValidationRules.name.CREATE_REQUIRED && (gender.name == null || gender.name == undefined)) return ThrowError("gender name required.");
    if (typeof(gender.name) != ValidationRules.name.TYPE) return ThrowError("gender name field must be string");
    if (ValidationRules.name.NOT_EMPTY && (gender.name == "")) return ThrowError("gender name cannot be empty.");
    if (gender.name.length < ValidationRules.name.MIN_LENGTH || gender.name.length > ValidationRules.name.MAX_LENGTH) return ThrowError(`the length of the gender name must be between ${ValidationRules.name.MIN_LENGTH} and ${ValidationRules.name.MAX_LENGTH}.`);

}

export function UpdateValidate(gender) {

    if (typeof(gender.name) != ValidationRules.name.TYPE) return ThrowError("gender name field must be string");
    if (ValidationRules.name.NOT_EMPTY && (gender.name == "")) return ThrowError("gender name cannot be empty.");
    if (gender.name.length < ValidationRules.name.MIN_LENGTH || gender.name.length > ValidationRules.name.MAX_LENGTH) return ThrowError(`the length of the gender name must be between ${ValidationRules.name.MIN_LENGTH} and ${ValidationRules.name.MAX_LENGTH}.`);

}