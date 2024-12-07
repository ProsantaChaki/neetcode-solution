function productExceptSelf(nums) {
    let r= nums.map((index,i)=>{
        return nums.reduce((acc, num, idx) => {
            if (idx === i) return acc;
            return acc * num;
        }, 1); 
    })
    return r;
}


console.log(productExceptSelf([1,2,4,6])) //Output: [48,24,12,8]
console.log(productExceptSelf( [-1,0,1,2,3])) //Output: [0,-6,0,0,0]
