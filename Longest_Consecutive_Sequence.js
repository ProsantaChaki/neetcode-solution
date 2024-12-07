function longestConsecutive(nums) {
    if(nums.length == 0 ) return 0;
    nums= nums.sort((a, b) => a - b)
    let result = 1;
    let sum = 1;
    let lastV = nums[0];
    for(let i=1; i<nums.length; i++){
        if(nums[i]==lastV) continue;
        if(nums[i]==lastV+1) sum= sum+1;
        if(sum>result) result = sum


        if(nums[i]!=lastV+1) sum = 1
        lastV = nums[i]
    }
    return result;
}

console.log(longestConsecutive([2,20,4,10,3,4,5])) //Output: 4
console.log(longestConsecutive([0,3,2,5,4,6,1,1])) //Output: 7
