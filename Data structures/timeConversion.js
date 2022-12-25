function timeConversion(s) {
    
    // Write your code here
    let time= s.substring(0,8);
    let newS = time.split(':');
    if(s.includes("PM")){
        if(newS[0]!== '12'){
            newS[0]=(Number(newS[0])+12);
        }  
    }
    else if(newS[0]=='12'){
            newS[0]='00';
        }
     return newS.join(':');
     
}
