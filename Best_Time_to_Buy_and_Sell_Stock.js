function maxProfit(prices) {
    let p=0;
    let minB= prices[0];
    for (let i=0 ; i<prices.length; i++){
        p = p < prices[i]-minB ? prices[i]-minB : p
        minB = minB > prices[i] ? prices[i] :minB
    }
    return p
}

console.log(maxProfit([10,1,5,6,7,1])) //Output: 6
console.log(maxProfit([10,8,7,5,2])) //Output: 0
