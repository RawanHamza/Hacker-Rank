function minimumDistances(a) {
    let index1=0;
    let distance =0;
    let lessdistance =Infinity;
    a.forEach((num,index)=>{
        index1 = index
        a.filter((num2,index2) =>{
            if(num===num2 && index1 !== index2){
                distance = Math.abs(index1-index2)
                if(distance<lessdistance){
                    lessdistance = distance
                }
            }
        })
    })
    if(lessdistance ==Infinity){
        lessdistance = -1
        return lessdistance
    }else {
         return lessdistance
    }  
}
/*
function minimumDistances(a) {
    // Write your code here
      let arr=[];
      
    for(let i=0 ,j=a.length-1;i<a.length,j>((a.length-1)/2);i++,j--){
        if(a[i]===a[j]){
            arr.push(j-i);  
        } 
         
    }
 if(arr.length!=0){
     return Math.min(...arr)
 }
 return -1;
}

*/
