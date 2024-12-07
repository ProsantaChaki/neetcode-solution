function isAnagram(s, t) {
    const s_tem = s.split("").sort()
    const t_tem = t.split("").sort();

    if(s_tem.length != t_tem.length) return false
    for(let i=0; i<s_tem.length; i++){
        if(s_tem[i]!=t_tem[i]) return false
    }
    return true;
}

console.log(isAnagram("racecar", "carrace")) //output true
console.log(isAnagram('jar', 'jam')) //output false