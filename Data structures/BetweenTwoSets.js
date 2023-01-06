function getTotalX(a, b) {
  const max_A = Math.max(...a);
  const min_B = Math.min(...b);
  let count = 0;
  for (let i = max_A; i <= min_B; i += max_A) {
    let factor_A = a.every((item) => i % item === 0);
    let factor_B = b.every((item) => item % i === 0);
    if (factor_A && factor_B) {
      count++;
    }
  }
  return count;
}
