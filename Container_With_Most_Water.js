function maxArea(heights) {
    let sum = 0;

    for(let i = 0; i<heights.length; i++){
        for(let j=heights.length-1; j>i; j--){
            const smallest = heights[i] < heights[j] ? heights[i] : heights[j];
            let s = smallest*(j-i)
            sum = sum>s?sum:s
        }
    }
    return sum
}
console.log(maxArea([1,7,2,5,4,7,3,6])) //Output: 36
console.log(maxArea([2,2,2])) //Output: 4

