// 1. Basic Error Handling Script: Write a script that demonstrates basic error handling using try-catch and finally blocks.

function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division is not possible by zero");
        }
        let result = a / b;
        console.log("Division:", result);
    } catch (error) {
        console.log("Error:", error.message);
    }
    finally{
        console.log("The finally block always run regardless of the error")
    }
}

divide(9, 5);


