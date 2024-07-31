// 3. Grouping and Capturing Script: Write a script that uses regular expressions to capture parts of a string, such as phone numbers and email addresses, and log the captures.



str = "(123) 456-7890)"
let [phoneNumner,areaCode,centralOfficeCode,lineNumber]= str.match(/\((\d{3})\)\s(\d{3})-(\d{4})/)

console.log("areaCode",areaCode)
console.log("centralOfficeCode",centralOfficeCode)
console.log("lineNumber",lineNumber)


str="paraman@gmail.com"
let [email,username,domain] = str.match(/(\w*\d*)@([a-z]+\.[a-z]+)/)

console.log("User Name",username)
console.log("Domain",domain)
