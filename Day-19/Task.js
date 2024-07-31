// Activity 1: Basic Regular Expressions


// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.

let str = "JavaScript" 
matches = str.match(/javascript/gi)
if(matches){
    console.log("All characters matches",matches)
}else{
    console.log("Not Matched")
}

// Task 2: Write a regular expression to match all digits in a string. Log the matches.

str = "12Java34"
matches = str.match(/\d+/g)
if(matches){
    console.log("Digit are matched",matches)
}else{
    console.log("All digits are not matched")
}

// Activity 2: Character Classes and Quantifiers


// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

str = "Javacode"

matches = str.match(/^[A-Z][a-z]*/g)

if(matches){
    console.log("String matched",matches)
}else{
    console.log("String not matched")
}


// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.


str = "12,2,334354"

matches = str.match(/\d+/g)

if(matches){
    console.log("String matched",matches)
}else{
    console.log("Not matched")
}

// Activity 3: Grouping and Capturing

// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.

str = "(123) 456-7890)"
let [phoneNumner,areaCode,centralOfficeCode,lineNumber]= str.match(/\((\d{3})\)\s(\d{3})-(\d{4})/)

console.log("areaCode",areaCode)
console.log("centralOfficeCode",centralOfficeCode)
console.log("lineNumber",lineNumber)

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

str="paraman@gmail.com"
let [email,username,domain] = str.match(/(\w*\d*)@([a-z]+\.[a-z]+)/)

console.log("User Name",username)
console.log("Domain",domain)

// Activity 4: Assertions and Boundaries


// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

str="Learn from the environment"

matches_start = str.match(/^Learn/gi)
if(matches_start){
    console.log("String Matches",matches_start)
}else{
    console.log("Not found")
}



// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.



str="Learn from the environment"

matches_end = str.match(/environment$/gi)
if(matches_end){
    console.log("String Matches",matches_end)
}else{
    console.log("Not found")
}


// Activity 5: Practical Applications



// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter,
// one digit, and one special character). Log whether the password is valid.

password = "Al1#h455"

matches = password.match(/^([A-Z]+[a-z]+\d+[^\w\s\d]+).{4,}$/)
if(matches){
    console.log("Password is Valid")
}else{
    console.log("Write a Strong password with given norms")
}

// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.


url = "www.fkchart.com/"

matches = url.match(/^www\.[a-z]{1,}\.*[a-z]/i)

if(matches){
    console.log("The url is valid")
}else{
    console.log("Url is not valid")
}