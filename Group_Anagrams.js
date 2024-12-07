function  groupAnagrams(strs) {

    let strs2 = strs.map(s => s.split("").sort().join("")); 
    let ans = []; 
    let exc = []; 

    for (let i = 0; i < strs2.length; i++) {
        if (exc.includes(i)) {
            continue;
        }
        let group = [i]; 
        exc.push(i);

        for (let j = i + 1; j < strs2.length; j++) { 
            if (strs2[i] === strs2[j]) {
                group.push(j); 
                exc.push(j);  
            }
        }

        ans.push(group.map(i=>  strs[i]));
    }

    return ans
}

console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"]))  //output [["hat"],["act", "cat"],["stop", "pots", "tops"]]
console.log(groupAnagrams(["x"])) //Output: [["x"]]
console.log(groupAnagrams([""])) //Output: [[""]]

