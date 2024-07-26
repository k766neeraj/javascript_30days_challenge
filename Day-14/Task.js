// Activity 1: Class Definition

// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. 
// Create an instance of the class and log the greeting message.

class Person {
    
    constructor(name,age) {
        this.name=name
        this.age=age
    }
    greeting() {
        return  `Good Morning ${this.name}`    
    }

    // Task 2: Add a method to the Person class that updates the age property and logs the updated age.

    UpdateAge(age){
        this.age = age
    }
}
let p1 = new Person("rahul",27)
console.log("Class",p1.greeting())
p1.UpdateAge(22)
console.log("Age is:",p1.age)

// Activity 2: Class Inheritance

// Task 3: Define a class Student that extends the Person class. Add a property student Id and a method to return the student ID.
// Create an instance of the Student class and log the student ID.

class Student extends Person{
    constructor(name,age,studetID) {

        super(name,age)
        this.studetID = studetID
    }

    getStudentID(){
        return this.studetID
    }

    // Task 4: Override the greeting method in the Student class to include the student ID in the message.
    // Log the overridden greeting message.
    
    greeting(){
        return `Good Morning student id: ${this.studetID}`
    }
}

let s1 = new Student('Rahul',34,1575)

console.log("StudentID:",s1.getStudentID())

console.log(s1.greeting())

// Activity 3: Static Methods and Properties


// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static
// method without creating an instance of the class and log the message.

class Person {
    
    constructor(name,age) {
        this.name=name
        this.age=age
    }
    static greeting(){
        return "Hello Good morning Everyone"
    }
}

console.log("Greeting:",Person.greeting())


// Task 6: Add a static property to the Student class to keep track of the number of students created.
// Increment this property in the constructor and log the total number of students.

class Student {
    static count =0
    constructor(studetID) {

        this.studetID = studetID
        Student.count+=1
    }

    getStudentID(){
        return this.studetID
    }

}

s1 = new Student(323)
s2 = new Student(354)
s3 = new Student(356)

console.log("Count",Student.count)


// Activity 4: Getters and Setters

// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName
// property). Create an instance and log the full name using the getter. 


class Person {
    
    constructor(firstName,lastName,age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    
    getFirstName(){
        return this.firstName
    }

    getLastName(){
        return this.lastName
    }
    // Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName).
    // Update the name using the setter and log the updated full name.

    setFirstName(firstName){
        this.firstName = firstName
    }

    setLastName(lastName){
        this.lastName = lastName
    }
}


p1 = new Person("Rahul","Teja",45)

console.log("Name",p1.getFirstName(),"-",p1.getLastName())


p1.setFirstName("Rhauja")
p1.setLastName("Jha")

console.log("Name",p1.getFirstName(),"-",p1.getLastName())

// Activity 5: Private Fields (Optional)


// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money.
// Ensure that the balance can only be updated through these methods.

class Account{

    #balance=0
    constructor(name,id) {
        this.name = name
        this.id = id
    }
    
    deposteMoney(money){
        this.#balance+=money
    }

    withdrawMoney(money){
        if(this.#balance<money){
            console.log("Insufficient Balance")
        }else if(this.#balance==money){
            console.log("Can not process the transcation due to zero balance after transaction, add some money to maintain zero balance")
        }
        else{
            this.#balance-=money
        }
    }

    getBalance(){
        return this.#balance
    }
}


// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, 
// logging the balance after each operation.

a1 = new Account("Teja",45)
console.log("Account",a1.name,a1.id)

a1.deposteMoney(1329)

console.log("Balance after credit",a1.getBalance())

a1.withdrawMoney(540)

console.log("Balance after debit:",a1.getBalance())

a1.withdrawMoney(789)

console.log("Balance:",a1.getBalance())





