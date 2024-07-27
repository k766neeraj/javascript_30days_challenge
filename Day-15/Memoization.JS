// 5. Memoization Script: Write a script that memoizes the results of a function and demonstrates it with a factorial calculation.



let memorise = (func)=>{
    const hash = new Map()
    return (key)=>{
        if(hash.has(key)){
            console.log("Fetching",key)
            return hash.get(key)
        }
        const res = func(key)
        hash.set(key,res)
        return res
    }
}

let multiply = (num)=>{
    console.log("Computing",num)
    return num * 5
}

let memorisefunc = memorise(multiply)

console.log(memorisefunc(10))
console.log(memorisefunc(10))
console.log(memorisefunc(20))
console.log(memorisefunc(20))


let memofact = (func)=>{
    let hash = new Map()
    return (key)=>{
        if(hash.has(key)){
            console.log("In memory")
            return hash.get(key)
        }
        let res = func(key)
        hash.set(key,res)
        return res
    }
}

let fact = (num)=>{
    let facto = 1
    for(let ind = num;ind>0;ind--){
        facto*=ind
    }
    return facto
}

let memo = memofact(fact)

console.log(memo(2))
console.log(memo(4))
console.log(memo(2))
