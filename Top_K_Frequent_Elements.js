function  topKFrequent(nums, k) {
    const arr = Array(nums.length).fill(0);
    let exc = [];
    for(let i=0; i<nums.length ; i++){
        if(exc.includes(nums[i])) continue;
        exc.push(nums[i])
        let sum = 1;
        for(let j = i+1; j<nums.length; j++){
            if(nums[i]==nums[j]) sum++;
        }
        arr[i]= sum
    }
    const ind = arr
    .map((value, index) => ({ value, index }))
    .sort((a, b) => b.value - a.value)
    .slice(0, k)
    .map(item => item.index);

    return ind.map(item=>nums[item])
}

console.log(topKFrequent([1,2,2,3,3,3], 2)) //Output: [2,3]
console.log(topKFrequent([7,7], 1)) // Output: [7]

