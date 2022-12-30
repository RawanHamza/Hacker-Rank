function diagonalDifference(arr) {
    // Write your code here
    const dim =arr[0].length;
    let first_diagonal_sum=0;
    let second_diagonal_sum=0;
    let sum = 0;
    for(let i =0, j=(dim-1); i<dim , j>-1; i++ , j--){
        first_diagonal_sum += arr[i][i];
        second_diagonal_sum += arr[i][j];
    }
   return sum = Math.abs(first_diagonal_sum - second_diagonal_sum);
    
}
