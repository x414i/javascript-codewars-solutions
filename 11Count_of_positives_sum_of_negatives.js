function countPositivesSumNegatives(input) {
  let total=[0],negative=0;
  for(let i=0;i<input.length;i++)
  if(input[i]!=0)
      if(input[i]<0) negative+=input[i];
      else total[0]+=1;
      total[1]=negative;
  return total;
}
