// 5. Validation Script: Write a script that uses regular expressions to validate passwords and URLs and log whether they are valid.


password = "Al1#h455"

matches = password.match(/^([A-Z]+[a-z]+\d+[^\w\s\d]+).{4,}$/)
if(matches){
    console.log("Password is Valid")
}else{
    console.log("Write a Strong password with given norms")
}



url = "www.fkchart.com/"

matches = url.match(/^www\.[a-z0-9-]+(\.*[a-z]{2,})+\/?$/i)

if(matches){
    console.log("The url is valid")
}else{
    console.log("Url is not valid")
}