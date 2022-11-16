module.exports.errorResponse = (message) => {
    return {error : true, message}
}

module.exports.successResponse = {error : false, message : ""};