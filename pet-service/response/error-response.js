function ErrorResponse(message, error) {

    console.log(JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error))));
    var errorRes = {message};

    switch (error.name) {
        case 'SequelizeValidationError':
            errorRes.error = {
                name : "Validation Error",
                message : ""
            }
            error.errors.forEach(err => {
                errorRes.error.message += err.message + ', ';
            });
            break;
    }

    return errorRes;
}

export default ErrorResponse;