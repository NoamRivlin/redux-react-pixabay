// this middleware will handle all the errors in the application
// if there is an error, it will return the error message and the stack trace
const errorHandler = (err, req, res, next) => {
    // if the status code is 200, we set it to 500 to indicate that there was a server error
    const statusCode = res.statusCode ? res.statusCode : 500
    // we set the status code to the status code of the error
    res.status(statusCode)

    res.json({
        // we send the error message and the stack trace to the client
        message: err.message,
        stack: err.stack,
    })
}

module.exports = {
    errorHandler,
}
