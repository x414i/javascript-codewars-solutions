function repeatStr (n, s) {
    let x = s;
    if(n===0||n==null||n<0||!(typeof n === 'number'))
    return 0;
    for(let i=1;i<n;i++)
    s+=x;
  return s;
}