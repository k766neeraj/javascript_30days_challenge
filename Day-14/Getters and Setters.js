// 4. Getters and Setters Script: Create a script that uses getters and setters in a class.


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
