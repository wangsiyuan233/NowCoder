function captureThreeNumbers(str){
  //声明一个数组保存匹配的字符串结果
  var arr = str.match(/\d{3}/);
  //如果arr存在目标结果，则返回第一个元素，即最早出现的目标结果
  if(arr){return arr[0]};
  else return false;
}
