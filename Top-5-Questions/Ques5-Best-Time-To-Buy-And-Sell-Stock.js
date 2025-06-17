// Ques 5 - Best Time To Buy And Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

//Input: prices = [7,6,4,3,1]
//Output: 0
//Explanation: In this case, no transactions are done and the max profit = 0.

//discuss => https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/

//* Brute Force Solution
const maxProfit = function (prices) {
    let globalProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const profit = prices[j] - prices[i];
            if (profit > globalProfit) {
                globalProfit = profit;
            }
        }
    }
    return globalProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

//* Greedy Algorithm

const maxProfit2 = function (prices) {
    let minStockPrice = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minStockPrice) {
            minStockPrice = prices[i];
        } 

        let currentProfit = prices[i] - minStockPrice;

        if (currentProfit > profit) {
            profit = currentProfit;
        }
    }
    return profit
}

console.log(maxProfit2([7,6,4,3,1]));

// [7,1,5,3,6,4]
// min = 7 >> 1 >> 3 >> 4
// profit = 0 => 6 - 1 = 5 >> 6 - 3 = 3 >> 6 - 4 = 2
// max = 5