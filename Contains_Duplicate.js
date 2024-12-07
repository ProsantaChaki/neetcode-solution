function hasDuplicate(nums) {
    const set = new Set();
    for(let i=0 ; i<nums.length; i++){
        set.add(nums[i]);
    }
    return nums.length>set.size

}
console.log(hasDuplicate([1, 2, 3, 3]))  //output true
console.log(hasDuplicate([1, 2, 3, 4]))  //output false