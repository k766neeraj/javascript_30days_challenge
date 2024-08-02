// 5. Valid Parentheses Script: Write a script that includes a function to check if a string of parentheses is valid and logs the result.


var isValid = function(s) {
    let i=0;
    let st=[]
    while(i<s.length){
        if(s[i]=='(' || s[i]=='{' || s[i]=='['){
            st.push(s[i])
        }else{
            if(s[i]==')'){
                if(st[st.length-1]=='('){
                    st.pop()
                }else{
                    return false
                }
            }else if(s[i]=='}'){
                if(st[st.length-1]=='{'){
                    st.pop()
                }else{
                    return false
                }
            }else{
                if(st[st.length-1]=='['){
                    st.pop()
                }else{
                    return false
                }
            }
        }
        i+=1
    }
    if(st.length==0){
        return true
    }
    return false
};

console.log("valid Parenthesis",isValid('()]'))
console.log("valid Parenthesis",isValid('({[{}]})'))

