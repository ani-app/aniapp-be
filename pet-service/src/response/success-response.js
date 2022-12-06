function SuccessResponse(message, data) {
    if (data === undefined || data === null) {
        return {message};
    }
    return {
        message,
        data
    }   
}

export default SuccessResponse;