// 3. String Algorithm Script: Write a script that counts character occurrences and finds the longest substring without repeating characters.


let hastr = new Map()
let str = "fsdfsdpeie"
for (const st of str) {
    if(!hastr.has(st)){
        hastr.set(st,1)
    }else{
        hastr.set(st,hastr.get(st)+1)
    }
}

hastr.forEach((val,key)=>{
    console.log(`Character:${key} occurence is:${val}`)
})



let hasub = new Map()
str = "abcdcbacaebf"
maxlen=0
sp=0
ep=0

while(ep<str.length){
    if(!hasub.has(str[ep])){
        hasub.set(str[ep],1)
       

        if(ep-sp+1>maxlen){
            
            maxlen=ep-sp+1
        }
        ep+=1
    }else{
        while(str[sp]!=str[ep]){
            hasub.set(str[sp],hasub.get(str[sp])-1)
            if(hasub.get(str[sp])==0){
                hasub.delete(str[sp])
            }
            sp+=1
        }
      
        sp+=1
        ep+=1
       

    }
}
console.log("Longest substring with no repeating characters:",maxlen)
