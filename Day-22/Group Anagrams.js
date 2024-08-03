// 5. Group Anagrams Script: Write a script that includes a function to group anagrams and logs the grouped anagrams.


var groupAnagrams = function(strs) {
    let hs = new Map()
    for(let i=0;i<strs.length;i++){
        let temp = strs[i].split('')
        let st = temp.sort().join('')
        if(!hs.has(st)){
            hs.set(st,[])
        }
    }
    let res=[]
    for(let st of strs){
        let temp = st.split('')
        let litost = temp.sort().join('')
        if(hs.has(litost)){
            hs.get(litost).push(st)
        } 
    }
    let fians=[]
    for(let key of hs){
    
        fians.push(key[1])
    }
    return fians
};


console.log('Result of ["eat","tea","tan","ate","nat","bat"] is:',groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log('Result of ["a","aa"] is:',groupAnagrams(["a","aa"]))