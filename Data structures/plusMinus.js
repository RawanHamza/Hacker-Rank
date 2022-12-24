function plusMinus(arr) {
    let zero=arr.filter(el=>el==0).length/arr.length;
    let negative=arr.filter(el=>el<0).length/arr.length;
    let positive=arr.filter(el=>el>0).length/arr.length;
    return console.log(positive.toFixed(6) +'\n' + negative.toFixed(6)+'\n'+ zero.toFixed(6))
    /*
    let zero=0;
    let pos=0;
    let neg=0;
    let n= arr.length;
    for(let el of arr){
        if(el>0){
            pos++;
        }
        else if(el<0){
            neg++;
        }
        else{
            zero++;
        }
    }
     return console.log((pos/n).toFixed(6) + '\n' + (neg/n).toFixed(6) + '\n' + (zero/n).toFixed(6))
     */

}
