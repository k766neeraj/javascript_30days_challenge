// 4. N-Queens Script: Create a script that includes a function to solve the N-Queens problem and logs the distinct solutions.


let isSatisfied = function(row,col,board,n){
    temprow = row
    tempcol = col
    while(row>=0 && col>=0){
        if(board[row][col]=='Q'){
            return false
        }
        row-=1
        col-=1
    }

    col = tempcol
    row = temprow
    while(col>=0){
        if(board[row][col]=='Q'){
            return false
        }
        col-=1
    }
    row = temprow
    col = tempcol
    while(row<n && col>=0){
        if(board[row][col]=='Q'){
            return false
        }
        row+=1
        col-=1
    }
    return true
}

let column = function(col,board,n,ans){
    if(col==n){
        let te=[]
        for(let i=0;i<n;i++){
            te.push(board[i].join(''))
        }
      
        ans.push(te)
        return 
    }
    for(let row = 0;row<n;row++){
        if(isSatisfied(row,col,board,n)){
            board[row][col]='Q'
            column(col+1,board,n,ans)
            board[row][col]='.'
        }
    }
}

var solveNQueens = function(n) {
      let ans = []
      let board = new Array(n)
      for(let i=0;i<n;i++){
        board[i]= new Array(n);
      }
      for(i=0;i<n;i++){
        board[i].fill('.')
      }
      column(0,board,n,ans)
      return ans
};

console.log("Result for 4 Queen",solveNQueens(4))
console.log("Result for 4 Queen",solveNQueens(1))

