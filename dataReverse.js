function dataReverse(data) {
  let arr = [];
  
  while (data.length) {
    arr.push(...data.splice(data.length - 8, data.length));
  }
  return arr;
}
