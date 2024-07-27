// 4. Loop Closure Script: Create a script that demonstrates closures in loops to ensure functions log the correct index.


let arr = []
for (let index = 0; index < 5; index++) {
    arr.push(
        ((i) => {
            return () => console.log(i)
        })(index)
    )
}

for (let func of arr) {
    func()
}