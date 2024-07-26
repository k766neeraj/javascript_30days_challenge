// 2. Class Inheritance Script: Create a script that defines a Student class extending Person, overrides methods, and logs the results.



class Person {
    
    constructor(name,age) {
        this.name=name
        this.age=age
    }
    greeting() {
        return  `Good Morning ${this.name}`    
    }

}

class Student extends Person{
    constructor(name,age,studetID) {

        super(name,age)
        this.studetID = studetID
    }

    getStudentID(){
        return this.studetID
    }

    
    greeting(){
        return `Good Morning student id: ${this.studetID}`
    }
}

let s1 = new Student('Rahul',34,1575)

console.log("StudentID:",s1.getStudentID())

console.log(s1.greeting())