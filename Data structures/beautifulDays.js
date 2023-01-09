
function beautifulDays(i, j, k) {
    // Write your code here
    let count=0;
    for(let el=i ; i<=j;i++){
        let num=i.toString().split("").reverse().join("");
        let revnum=parseInt(num);
        if((Math.abs(i-revnum)%k)===0){
            count++;
        }
    }
    return count;
}
