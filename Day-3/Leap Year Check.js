// 5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.


let year = 2000

if(year%4==0 && year%100!=0){
    console.log("Leap Year")
}else if(year%100==0 && year%400==0){
    console.log("Leap Year")
}else{
    console.log("Not a Leap Year")
}