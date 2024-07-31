// 2. Character Classes and Quantifiers Script: Create a script that uses regular expressions to match words with specific characteristics and log the matches.



str = "Javacode"

matches = str.match(/^[A-Z][a-z]*/g)

if(matches){
    console.log("String matched",matches)
}else{
    console.log("String not matched")
}




str = "12,2,334354"

matches = str.match(/\d+/g)

if(matches){
    console.log("String matched",matches)
}else{
    console.log("Not matched")
}
