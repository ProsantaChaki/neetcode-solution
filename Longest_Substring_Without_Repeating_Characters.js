function lengthOfLongestSubstring(s) {
    let mp = new Map();
    let li=0;
    let r=0;
    for(let i=0; i<s.length ; i++){
        if(mp.has(s[i])){
            li=Math.max(mp.get(s[i])+1, li)
        }
        r = Math.max(r, i+1-li)
        mp.set(s[i], i)
    }
    return r;
}

console.log(lengthOfLongestSubstring("zxyzxyz")) //Output: 3
console.log(lengthOfLongestSubstring("xxxx")) //Output: 1
