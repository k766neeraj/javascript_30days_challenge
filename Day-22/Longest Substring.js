// 2. Longest Substring Script: Create a script that includes a function to find the longest substring without repeating characters and logs the length.


var lengthOfLongestSubstring = function(str) {
    let hasub = new Map()
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
        }
        else{
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
    return maxlen

};

console.log("Result for abcabcbb",lengthOfLongestSubstring("abcabcbb"))
console.log("Result for pwwkew",lengthOfLongestSubstring("pwwkew"))
