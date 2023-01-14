import { ThrowError } from "./validationResponse"
const ValidationRules = {
    name : {
        CREATE_REQUIRED : true,
        MAX_LENGTH : 32,
        MIN_LENGTH : 2,
        NOT_EMPTY : true,
        TYPE : "string"
    },
    breedTypeId : {
        CREATE_REQUIRED: true,
        TYPE: "number"
    }
}

export function CreateValidate(breed) {

    // name field validations
    if (ValidationRules.name.CREATE_REQUIRED && (breed.name == null || breed.name == undefined)) return ThrowError("breed name required.");
    if (typeof(breed.name) != ValidationRules.name.TYPE) return ThrowError("breed name field must be string");
    if (ValidationRules.name.NOT_EMPTY && (breed.name == "")) return ThrowError("breed name cannot be empty.");
    if (breed.name.length < ValidationRules.name.MIN_LENGTH || breed.name.length > ValidationRules.name.MAX_LENGTH) return ThrowError(`the length of the breed name must be between ${ValidationRules.name.MIN_LENGTH} and ${ValidationRules.name.MAX_LENGTH}.`);

    // breedType field validations
    if (ValidationRules.breedTypeId.CREATE_REQUIRED && (pet.breedTypeId == null || pet.breedTypeId == undefined)) return ThrowError("breedTypeId required.");
    if (typeof(breed.breedTypeId) != ValidationRules.breedTypeId.TYPE) return ThrowError("breedTypeId field must be integer");


}

export function UpdateValidate(breed) {

    if (typeof(breed.name) != ValidationRules.name.TYPE) return ThrowError("breed name field must be string");
    if (ValidationRules.name.NOT_EMPTY && (breed.name == "")) return ThrowError("breed name cannot be empty.");
    if (breed.name.length < ValidationRules.name.MIN_LENGTH || breed.name.length > ValidationRules.name.MAX_LENGTH) return ThrowError(`the length of the breed name must be between ${ValidationRules.name.MIN_LENGTH} and ${ValidationRules.name.MAX_LENGTH}.`);

}