function birthdayCakeCandles(candles) {
    // Write your code here
let max = Math.max(... candles);
const result = candles.filter(elm => elm === max);
return result.length;
}
