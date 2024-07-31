// 4. Assertions and Boundaries Script: Create a script that uses regular expressions to match words at specific positions in a string and log the matches.



str="Learn from the environment"

matches_start = str.match(/^Learn/gi)
if(matches_start){
    console.log("String Matches",matches_start)
}else{
    console.log("Not found")
}






str="Learn from the environment"

matches_end = str.match(/environment$/gi)
if(matches_end){
    console.log("String Matches",matches_end)
}else{
    console.log("Not found")
}
