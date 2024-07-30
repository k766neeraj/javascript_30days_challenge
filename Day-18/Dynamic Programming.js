// 5. Dynamic Programming Script: Write a script that solves the Fibonacci sequence and knapsack problem using dynamic programming (optional).


function fibonacci(n,dp){
    if(n==0 || n==1){
        return n
    }
    if(dp[n]!=-1){
        return dp[n]
    }
    let ans = fibonacci(n-1,dp)+fibonacci(n-2,dp)
    dp[n]=ans
    return ans
}
n=6
dp=Array.from({length:n+1}, (_,i)=>-1)

console.log(fibonacci(n,dp))


// N = 3
// W = 4
// values[] = {1,2,3}
// weight[] = {4,5,1}
// Output: 3

function knapsack(val,wt,k,i,dp){
    if(i==-1 || k==0){
        return 0
    }
    if(dp[i][k]!=-1){
        return dp[i][k]
    }
    let leave = knapsack(val,wt,k,i-1,dp)
    let take = 0
    if(k>=wt[i]){
        take = knapsack(val,wt,k-wt[i],i-1,dp)+val[i]
    }
    dp[i][k]=Math.max(take,leave)
    return Math.max(take,leave)
}

let N = 3
let W = 4
let values = [1,2,3]
let weight = [4,5,1]
dp = new Array(N)

for(let i=0;i<N;i++){
    dp[i]=new Array(W+1).fill(-1)
}
console.log("dp",dp)
console.log("Maxmum value",knapsack(values,weight,W,N-1,dp))
