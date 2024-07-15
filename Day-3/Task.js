// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num1 = 5

if(num1>0){
    console.log("Number is Positive")
}else if(num1<0){
    console.log("Number is Negative")
}else{
    console.log("Number is Zero")
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 16

if(age<18){
    console.log("Not Eigible to Vote")
}else{
    console.log("Eligible to Vote");
}

// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let a = 15
let b = 220
let c = 105

if(a>b){
    if(a>c){
        console.log("a is greater");
    }else{
        console.log("c is greater")
    }
}else if(b>c){
    console.log("b is greater");
}else{
    console.log("c is greater")
}

// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 2

switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;

    default:
        console.log("Invalid")
        break;
}

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let marks = 75

switch (true) {
    case (marks>=90):
        console.log("Grade: A")
        break;
    case (marks>=80 && marks<90):
        console.log("Grade: B")
        break;
    case (marks>=70 && marks<80):
        console.log("Grade: C")
        break;
    case (marks>=60 && marks<70):
        console.log("Grade: D")
        break;
    case (marks>=50 && marks<60):
        console.log("Grade: E")
        break;

    default:
        console.log("Grade: F")
        break;
}

// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let num2 = 59

console.log(num2%2==0?"Even Number":"Odd Number")

// Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2024

if((year%4==0 && year%100!=0) ||year%400==0 ){
    console.log("Leap Year")
}else{
    console.log("Not a Leap Year")
}
