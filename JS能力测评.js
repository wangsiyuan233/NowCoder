// 题目一： 查找数组元素位置
// 描述： 如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1

function indexOf(arr, item){
  //判断是否支持indexOf方法
  if(Array.prototype.indexOf){
      return arr.indexOf(item);
  }else{
      for(var i = 0; i < arr.length; i++){
          if(arr[i] === item){
              return i;
          }
      }
  }     
  return -1;
}

// 题目二：数组求和
// 描述：数组中的元素均为 Number 类型

//方法 1：递归
function sum(arr) {
    var len = arr.length;
    if(len == 0){
      return 0;
    }else if(len == 1){
      return arr[0];
    }else{
      //每次只取位置 1 的元素相加
      return arr[0] + sum(arr.slice(1));
    }
}

//方法 2： for 循环
function sum(arr){
  var s = 0;
  for(var i = arr.length-1; i>=0; i--){
    s += arr[i];
  }
  return s;
}

//方法 3：map-reduce
function sum(arr){
  return arr.reduce(function(prev, curr, idx, arr){
    return prev + curr;
  });
}

//方法 4：forEach
function sum(arr){
  var s = 0;
  arr.forEach(function(val, idx, arr){
    s += val;
  }, 0);
  return s;
};

//方法 5：eval
function sum(arr) {
  return eval(arr.join("+"));
};


// 题目 三：移除数组中的元素
// 描述：移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组

function remove(arr,item){
  //声明一个新数组保存结果
  var a = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] != item){
      a.push(arr[i]);
    }
  }
  return a;
}
// 题目 四：添加元素
// 描述：在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数

//方法1：普通迭代
var append = function(arr, item) {
    var len = arr.length;
    var a = [];
    for (var i = 0; i < len; i++) {
        a.push(arr[i]);
    }
    a.push(item);
    return a;
};

// 方法2：slice浅拷贝+push组合
var append2 = function(arr, item) {
  // slice(start, end)浅拷贝数组
    var a = arr.slice(0); 
    a.push(item);
    return a;
};

// 方法3：concat
var append3 = function(arr, item) {
    return arr.concat(item);
};


// 题目 五：删除数组最后一个元素
// 描述：删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组

//方法1：利用slice
function truncate(arr) {
    return arr.slice(0,-1);
}
//方法2：利用filter
function truncate(arr) {
    return arr.filter(function(v,i,ar) {
        return i!==ar.length-1;
    });
}
//方法3：利用push.apply+pop
function truncate(arr) {
    var newArr=[];
    [].push.apply(newArr, arr);
    newArr.pop();
    return newArr;
}
//方法4：利用join+split+pop  
//注意！！！：数据类型会变成字符型
function truncate(arr) {
    var newArr = arr.join().split(',');
    newArr.pop();
    return newArr;
}
//方法4：利用concat+pop
function truncate(arr) {
    var newArr = arr.concat();
    newArr.pop();
    return newArr;
}
//方法5：普通的迭代拷贝
function truncate(arr, item) {
    var newArr=[];
    for(var i=0;i<arr.length-1;i++){
        newArr.push(arr[i]);
    }
    return newArr;
}


// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：


// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：
// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：


// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：
// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：


// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：
// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：


// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：

// 题目：
// 描述：
