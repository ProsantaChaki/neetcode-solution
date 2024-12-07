function isValid(s) {
    while(1){
        if(s.includes('()') || s.includes('{}') || s.includes('[]')){
            s=s.replace("{}", "").replace("()", "").replace("[]", "")
        }else{
            break;
        }
     }
    return s==='';
}

console.log(isValid("[]")) // Output: true
console.log(isValid("([{}])")) // Output: true
console.log(isValid("[(])")) // Output: false