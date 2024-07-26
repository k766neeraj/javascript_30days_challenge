// 1. Basic Class Script: Write a script that defines a Person class with properties and methods, creates instances, and logs messages.


class Person {
    
    constructor(name,age) {
        this.name=name
        this.age=age
    }
    greeting() {
        return  `Good Morning ${this.name}`    
    }

  
    UpdateAge(age){
        this.age = age
    }
}
let p1 = new Person("rahul",27)
console.log("Class",p1.greeting())
p1.UpdateAge(22)
console.log("Age is:",p1.age)