// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 
// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104



// Implements Kadane's algorithm
function maxProfit(prices) {
    let buy = prices[0];
    let profit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i]; // Update the buying price to the lowest so far
        } else if (prices[i] - buy > profit) {
            profit = prices[i] - buy; // Calculate profit and update if it's the maximum
        }
    }
    
    return profit;
}

// DP Solution(C++): 
int helper(vector<int>& prices, int i, int n, int buy, int k) {
        if (i == n) {
            return 0;  // Base case: no more days left
        }
        if (k == 0) {
            return 0;  // Base case: no more transactions allowed
        }

        int take, dont_take;
        if (buy == 0) {
            // Case when we can either buy or skip buying today
            dont_take = helper(prices, i + 1, n, 0, k);  // Skip buying
            take = -prices[i] + helper(prices, i + 1, n, 1, k-1);  // Buy today
        } else {
            // Case when we can either sell or skip selling today
            dont_take = helper(prices, i + 1, n, 1, k);  // Skip selling
            take = prices[i] + helper(prices, i + 1, n, 0, k - 1);  // Sell today
        }

        return max(take, dont_take);
    }

    int maxProfit(vector<int>& prices) {
        return helper(prices, 0, prices.size(), 0, 2);
    }


