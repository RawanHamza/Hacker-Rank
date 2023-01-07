function pickingNumbers(a) {
    a.sort((a,b)=>a-b);
    let lengths = [];
    let num;
    for(let index in a) {
        if(a[index] !== num) {
            num = a[index];
            lengths.push(a.filter(n=>n===num||n===num+1).length);
        }
    }
    return (lengths.sort((a,b)=>b-a))[0];
}
