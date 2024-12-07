function search(nums, target) {
    for(let i=0; i<nums.length; i++){
        if(nums[i]== target) return i
    }
    return -1;
}


console.log(search([3,4,5,6,1,2], 1)) //Output: 4
console.log(search([3,5,6,0,1,2], 4)) //Output: -1