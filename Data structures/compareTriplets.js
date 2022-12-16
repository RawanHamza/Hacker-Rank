function compareTriplets(a, b) {
let alice=0;
let bob=0;
for(let i in a,b){
    if(a[i]>b[i]){
        alice++;
    }
    if(a[i]<b[i]){
    bob++;
    }
}
return [alice,bob];

}
