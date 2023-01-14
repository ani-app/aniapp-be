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

export function CreateValidate(breedType) {

    // name field validations
    if (ValidationRules.name.CREATE_REQUIRED && (breedType.name == null || breedType.name == undefined)) return ThrowError("breedType name required.");
    if (typeof(breedType.name) != ValidationRules.name.TYPE) return ThrowError("breedType name field must be string");
    if (ValidationRules.name.NOT_EMPTY && (breedType.name == "")) return ThrowError("breedType name cannot be empty.");
    if (breedType.name.length < ValidationRules.name.MIN_LENGTH || breedType.name.length > ValidationRules.name.MAX_LENGTH) return ThrowError(`the length of the breedType name must be between ${ValidationRules.name.MIN_LENGTH} and ${ValidationRules.name.MAX_LENGTH}.`);

}

export function UpdateValidate(breedType) {

    if (typeof(breedType.name) != ValidationRules.name.TYPE) return ThrowError("breedType name field must be string");
    if (ValidationRules.name.NOT_EMPTY && (breedType.name == "")) return ThrowError("breedType name cannot be empty.");
    if (breedType.name.length < ValidationRules.name.MIN_LENGTH || breedType.name.length > ValidationRules.name.MAX_LENGTH) return ThrowError(`the length of the breedType name must be between ${ValidationRules.name.MIN_LENGTH} and ${ValidationRules.name.MAX_LENGTH}.`);

}