// 5. Private Fields Script: Write a script that defines a class with private fields and methods to manipulate these fields (optional).


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
        }
        else{
            this.#balance-=money
        }
    }

    getBalance(){
        return this.#balance
    }
}



a1 = new Account("Teja",45)
console.log("Account",a1.name,a1.id)

a1.deposteMoney(1329)

console.log("Balance after credit",a1.getBalance())

a1.withdrawMoney(540)

console.log("Balance after debit:",a1.getBalance())

a1.withdrawMoney(789)

console.log("Balance:",a1.getBalance())

