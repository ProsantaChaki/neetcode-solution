function  threeSum(nums) {

    nums = nums.sort((a,b)=>a-b)
    let rA=[]
    let result = []
    for(let i=0; nums[i]<=0; i++){ //small
    for(let j = i+1; j<nums.length; j++){
        if(nums[i]+nums[j]+nums[nums.length-1] < 0 ) continue;
        for(let k = nums.length-1; nums[k]>=0 ; k--){ //big
            let sum = nums[i]+nums[j]+nums[k]
            if(sum<0 || j==k ) break;
            if(sum==0) {
                let nA= [nums[i],nums[j],nums[k]].sort((a,b)=>a-b)
                let sS = nA.join('')
                if(!rA.includes(sS)){
                        result.push(nA);
                        rA.push(sS)
                }
            }
        }
    }
    }
    return result
}

console.log(threeSum([-1,0,1,2,-1,-4])) //Output: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])) //Output: []
console.log(threeSum([0,0,0])) //Output: [[0,0,0]]