function minWindow(s, t) {
    let sta=0;
    let res = s.length+t.length;
    let tm = new Map();
    for (const char of t) {
        tm.set(char,(tm.get(char)??0)+1)
    }

    for(let i=0; i<s.length; i++){
        if(tm.has(s[i])){
            let sm = new Map(tm);
            sm.set(s[i], sm.get(s[i])-1);
            let size = sm.get(s[i]) ==0 ? tm.size-1 : tm.size;
                if(size==0){
                sta = i;
                res = 1
                continue;
            }

            for(let j=i+1; j<s.length; j++){
                
                if(tm.has(s[j])){
                    sm.set(s[j], sm.get(s[j])-1);
                    size = sm.get(s[j]) == 0 ? size-1 : size;
                }
                if(size==0){
                    sta = j-i>res?sta:i;
                    res = Math.min(j-i+1,res);
                    break;
                }

            }
        }

    }
    //console.log(res)
    return res<s.length+t.length?s.substring(sta, sta + res):""
    
}

console.log(minWindow("OUZODYXAZV", "XYZ")) //Output: "YXAZ"
console.log(minWindow("xyz", "xyz")) //Output: "xyz"
console.log(minWindow("x", "xy")) //Output: ""