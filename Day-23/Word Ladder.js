// 5. Word Ladder Script: Write a script that includes a function to find the shortest transformation sequence in a word ladder and logs the sequence length.


var ladderLength = function(beginWord, endWord, wordList) {
    let que=[]
    let set = new Set(wordList)
    que.push([beginWord,1])
    set.delete(beginWord)
    while(que.length!=0){
     let word = que[0][0]
     let steps = que[0][1]
     if(word==endWord){
         return steps
     }
     que.splice(0,1)
     let seStr = word.split('')
     for(let i=0;i<word.length;i++){
         let origin = seStr[i]
         for(let j=97;j<=122;j++){
             seStr[i]=String.fromCharCode(j)
             if(set.has(seStr.join(''))==true){
                 set.delete(seStr.join(''))
                 que.push([seStr.join(''),steps+1])
             }
         }
         seStr[i]=origin
     }
    }
    return 0
 };


 console.log("Result is :",ladderLength("hit", "cog",["hot","dot","dog","lot","log","cog"]))
 console.log("Result is :",ladderLength("hit", "cog",["hot","dot","dog","lot","log"]))