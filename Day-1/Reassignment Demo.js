// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

//with let
let var1 = 4
var1 = 8
console.log("Assign value",var1)

//with const
const var2 = 4
var2 = 8
console.log("Const assign give error",var2) //TypeError: Assignment to constant variable
