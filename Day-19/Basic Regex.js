// 1. Basic Regex Script: Write a script that uses regular expressions to match simple patterns and log the matches.


let str = "JavaScript" 
matches = str.match(/javascript/gi)
if(matches){
    console.log("All characters matches",matches)
}else{
    console.log("Not Matched")
}


str = "12Java34"
matches = str.match(/\d+/g)
if(matches){
    console.log("Digit are matched",matches)
}else{
    console.log("All digits are not matched")
}

