function sumArray(array) {
  if (!array || array.length <= 1) {
    return 0;
  }

  const max = Math.max(...array);
  const min = Math.min(...array);

   return array.reduce((sum, num) => sum + num, 0) - max - min;
}

