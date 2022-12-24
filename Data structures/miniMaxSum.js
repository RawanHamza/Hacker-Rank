function miniMaxSum(arr) {
    // Write your code here
    let sorted = arr.sort();
    let min=0;
    let max=0;
    for(let i=0;i<arr.length-1;i++){
        min+=sorted[i];
    }
    for(let j=arr.length-1;j>0;j--){
        max+=sorted[j];
    }
    console.log(min + " " + max);
    }
