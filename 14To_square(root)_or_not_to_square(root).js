function squareOrSquareRoot(array) {
    let newArr=[];
    for(let i=0;i<array.length;i++)
    if(Number.isInteger(Math.sqrt(array[i])))
    newArr[i]=Math.sqrt(array[i]);
    else
     newArr[i]=Math.pow(array[i],2);
  return newArr;  
}