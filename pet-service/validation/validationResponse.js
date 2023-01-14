export function ThrowError(msg) {
    let error = new Error(msg);
    error.name = "ValidationError";
    throw error;
}