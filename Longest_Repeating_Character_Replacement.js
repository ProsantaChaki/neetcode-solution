function characterReplacement(s, k) {
    let mp = new Map();
    let res = 0;
    let l = 0, max = 0;
    for (let i = 0; i<s.length; i++) {
        mp.set(s[i], (mp.get(s[i]) ?? 0) + 1);
        max = Math.max(max, mp.get(s[i]))
        while(i-l+1-max>k){
            mp.set(s[l], mp.get(s[l]) - 1);
            l++;
        }
        res = Math.max(res, i-l+1)
    }
    return res;
}

console.log(characterReplacement( "XYYX", 2)) //Output: 4
console.log(characterReplacement("AAABABB", 1)) //Output: 5
