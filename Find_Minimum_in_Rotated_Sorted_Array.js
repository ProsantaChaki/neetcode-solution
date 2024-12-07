function findMin(nums) {
    let r=nums[0];
    for(let i=0; i<nums.length; i++){
        r =Math.min(r, nums[i])
    }
    return r;
}

console.log(findMin([3,4,5,6,1,2])) //output 1
console.log(findMin([4,5,0,1,2,3])) //output 0
console.log(findMin([4,5,6,7])) //output 4