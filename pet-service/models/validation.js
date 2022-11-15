module.exports.errorResponse = (message) => {
    return {error, message}
}

module.exports.successResponse = {error : false, message : ""};