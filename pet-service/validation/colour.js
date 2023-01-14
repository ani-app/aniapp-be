import { ThrowError } from "./validationResponse"
const ValidationRules = {
    name : {
        CREATE_REQUIRED : true,
        MAX_LENGTH : 32,
        MIN_LENGTH : 2,
        NOT_EMPTY : true,
        TYPE : "string"
    },
    code : {
        CREATE_REQUIRED : true,
        IS_FIXED_SIZE : true,
        LENGHT : 6,
        NOT_EMPTY : true,
        TYPE : "string"
    }
}

export function CreateValidate(colour) {

    // name field validations
    if (ValidationRules.name.CREATE_REQUIRED && (colour.name == null || colour.name == undefined)) return ThrowError("colour name required.");
    if (typeof(colour.name) != ValidationRules.name.TYPE) return ThrowError("colour name field must be string");
    if (ValidationRules.name.NOT_EMPTY && (colour.name == "")) return ThrowError("colour name cannot be empty.");
    if (colour.name.length < ValidationRules.name.MIN_LENGTH || colour.name.length > ValidationRules.name.MAX_LENGTH) return ThrowError(`the length of the colour name must be between ${ValidationRules.name.MIN_LENGTH} and ${ValidationRules.name.MAX_LENGTH}.`);

    // code field validations
    if (ValidationRules.code.CREATE_REQUIRED && (colour.code == null || colour.code == undefined)) return ThrowError("colour code required.");
    if (typeof(colour.code) != ValidationRules.code.TYPE) return ThrowError(`colour code field must be ${ValidationRules.code.TYPE}`);
    if (ValidationRules.code.NOT_EMPTY && (colour.code == "")) return ThrowError("colour code cannot be empty.");
    if (ValidationRules.code.IS_FIXED_SIZE && colour.code.length != ValidationRules.code.LENGHT) return ThrowError(`the length of the colour code must be ${ValidationRules.code.LENGHT}`);

}

export function UpdateValidate(colour) {

    // name field validations
    if (typeof(colour.name) != ValidationRules.name.TYPE) return ThrowError("colour name field must be string");
    if (ValidationRules.name.NOT_EMPTY && (colour.name == "")) return ThrowError("colour name cannot be empty.");
    if (colour.name.length < ValidationRules.name.MIN_LENGTH || colour.name.length > ValidationRules.name.MAX_LENGTH) return ThrowError(`the length of the colour name must be between ${ValidationRules.name.MIN_LENGTH} and ${ValidationRules.name.MAX_LENGTH}.`);

    // code field validations
    if (typeof(colour.code) != ValidationRules.code.TYPE) return ThrowError(`colour code field must be ${ValidationRules.code.TYPE}`);
    if (ValidationRules.code.NOT_EMPTY && (colour.code == "")) return ThrowError("colour code cannot be empty.");
    if (ValidationRules.code.IS_FIXED_SIZE && colour.code.length != ValidationRules.code.LENGHT) return ThrowError(`the length of the colour code must be ${ValidationRules.code.LENGHT}`);

}