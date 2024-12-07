function   twoSum(nums, target) {

    for(let i = 0 ; i<nums.length; i++){
        let sub = target-nums[i]
        let ind=0;

            for(let j=i+1; j<nums.length; j++){
                if(nums[j]==sub){
                    ind =  j;
                    break;
                }

            }
        
        if(ind!=0) return [i,ind]

    }
}

console.log(twoSum([3,4,5,6], 7)) //output  [0,1]
console.log(twoSum([4,5,6], 10))  //output [0,2]
console.log(twoSum([5,5], 10))  //output [0,1]