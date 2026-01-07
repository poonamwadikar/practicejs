function armStrongnum(num){
    let str = num.toString();
    let digits = str.length;
    let sum =0;
    for(let ch of str){
        sum = sum + Math.pow(Number(ch), digits)
    }

    if(sum === num){
        console.log("armstrong");
    }else{
        console.log("not armstrong");
    }
}
armStrongnum(153);
armStrongnum(123);