// 2. Custom Error Script: Create a script that defines and throws custom errors, handling them with try-catch blocks.

class CustomError extends Error {

    constructor(message) {
        super(message)
    }
}

function customError() {
    try {
        throw new CustomError("This is the custom error")
    } catch (error) {
        console.log("Error", error.message)
    }
}

customError()
