function encode(strs) {
    if(strs.length==0) return "";
   let strL= strs.map(i=>i.length).join(",")+"#"+strs.join("");
   return strL
}

function decode(str) {
    if(str.length==0 || str=="") return []
    //if(!str.split("#")[1]) return [""]
    let num = str.split("#")[0].split(",")
    let strE = str.split(num[num.length-1]+"#")[1]
    let result=[]
    let ind = 0
    for(let i=0 ; i<num.length; i++){
        result.push(strE.slice(ind,parseInt(num[i])+ind))
        ind=ind+parseInt(num[i])
    }
    return result
}

console.log(decode(encode(["neet","code","love","you"]))) // Output:["neet","code","love","you"]
console.log(decode(encode(["we","say",":","yes"]))) //Output: ["we","say",":","yes"]