// 3. Static Methods and Properties Script: Write a script that demonstrates static methods and properties in classes.



class Student {
    static count =0
    constructor(name,age,studetID) {
        this.name=name
        this.age=age
        this.studetID = studetID
        Student.count+=1
    }

    getStudentID(){
        return this.studetID
    }
    static greeting(){
        return "Hello Good morning Everyone"
    }
}

s1 = new Student(323)
s2 = new Student(354)
s3 = new Student(356)
console.log(Student.greeting())
console.log("Count",Student.count)
