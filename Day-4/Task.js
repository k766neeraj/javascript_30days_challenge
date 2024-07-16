// Activity 1: For Loop

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for(let i=1;i<=10;i++){
    console.log(i)
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.

for(let i=1;i<=10;i++){
    console.log(`5 * ${i} = `,5*i)
}

// Activity 2: While Loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let sum = 0
let i=1
while(i<=10){
    sum+=i
    i+=1
}

console.log("Sum",sum)

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let j = 10
while(j>0){
    console.log(j);
    j-=1
}

// Activity 3: Do... While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let k=1
do{
    console.log(k)
    k+=1
}while(k<6)

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.

let num = 0

let factorial = 1
do{
    if(num==0){
        break
    }
    factorial*=num
    num-=1
}while(num>0)

console.log("Factorial:",factorial)

// Activity 4: Nested Loops
// Task 7: Write a program to print a pattern using nested for loops:
// *
// * *
// * * *
// * * * *
// * * * * *

for(let i = 1;i<=5;i++){
    let star= ""
    for(let j=1;j<=i;j++){
        star+="* "
    }
    console.log(star)
}

// Activity 5: Loop Control Statements

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for(let i =1;i<=10;i++){
    if(i==5){
        continue
    }
    console.log(i)
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

for(let i =1;i<=10;i++){
    if(i==7){
        break
    }
    console.log(i)
}