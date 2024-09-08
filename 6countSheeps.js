function countSheeps(sheep) {
  let count=0;
 for(let i=0;i<sheep.toString().length;i++)
 if(sheep[i]==true)
 count++;
 return count;
}