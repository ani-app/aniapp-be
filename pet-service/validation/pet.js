import { ThrowError } from "./validationResponse"
const ValidationRules = {
    name : {
        CREATE_REQUIRED : true,
        MAX_LENGTH : 32,
        MIN_LENGTH : 2,
        NOT_EMPTY : true,
        TYPE : "string"
    },
    customerId : {
        CREATE_REQUIRED: true,
        TYPE: "number"
    }
}

export function CreateValidate(pet) {

    // name field validations
    if (ValidationRules.name.CREATE_REQUIRED && (pet.name == null || pet.name == undefined)) return ThrowError("pet name required.");
    if (typeof(pet.name) != ValidationRules.name.TYPE) return ThrowError("pet name field must be string");
    if (ValidationRules.name.NOT_EMPTY && (pet.name == "")) return ThrowError("pet name cannot be empty.");
    if (pet.name.length < ValidationRules.name.MIN_LENGTH || pet.name.length > ValidationRules.name.MAX_LENGTH) return ThrowError(`the length of the pet name must be between ${ValidationRules.name.MIN_LENGTH} and ${ValidationRules.name.MAX_LENGTH}.`);

    // customerId field validations
    if (ValidationRules.customerId.CREATE_REQUIRED && (pet.customerId == null || pet.customerId == undefined)) return ThrowError("customerId required.");
    if (typeof(pet.customerId) != ValidationRules.customerId.TYPE) return ThrowError("customerId field must be integer");

}

export function UpdateValidate(pet) {

    if (typeof(pet.name) != ValidationRules.name.TYPE) return ThrowError("pet name field must be string");
    if (ValidationRules.name.NOT_EMPTY && (pet.name == "")) return ThrowError("pet name cannot be empty.");
    if (pet.name.length < ValidationRules.name.MIN_LENGTH || pet.name.length > ValidationRules.name.MAX_LENGTH) return ThrowError(`the length of the pet name must be between ${ValidationRules.name.MIN_LENGTH} and ${ValidationRules.name.MAX_LENGTH}.`);

}