// 3. Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.

let stars = 6

for(let i = 1;i<=6;i++){
    let star= ""
    for(let j=1;j<=i;j++){
        star+="* "
    }
    console.log(star)
}