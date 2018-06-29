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
// 题目 四：末尾添加元素
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
function truncate(arr){
    return arr.slice(0,-1);
}

//方法2：利用filter
function truncate(arr){
  return arr.filter(function(v,i,arr){
    return i !== arr.length -1
  });
}

//方法3：利用push.apply
function truncate(arr){
  var a=[];
  [].push.apply(a, arr);
  a.pop();
  return a;
}

//方法4：利用join+split
//注意：数据类型会变成字符型
function truncate(arr){
    var a = arr.join().split(',');
    a.pop();
    return a;
}

//方法4：利用concat+pop
function truncate(arr){
    var a = arr.concat();
    a.pop();
    return a;
}

//方法5：普通的迭代拷贝
function truncate(arr, item){
    var a = [];
    for(var i=0;i<arr.length-1;i++){
    a.push(arr[i]);
    }
    return a;
}


// 题目六：开头添加元素
// 描述：在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组

function prepend(arr, item){
       return [item].concat(arr);
}

// 题目七：删除第一个元素
// 描述：删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组

function curtail(arr){
  return arr.slice(1);
}

// 题目八： 数组合并
// 描述：合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组

//方法1：利用concat
function concat(arr1, arr2){
    return arr1.concat(arr2);
}

//方法2：利用slice+push.apply
function concat(arr1, arr2){
    var a = arr1.slice(0);
    [].push.apply(a, arr2);
    return a;
}

//方法3：利用slice+push
function concat(arr1, arr2) {
    var a = arr1.slice(0);
    for(var i=0;i<arr2.length;i++){
      a.push(arr2[i]);
    }
    return a;
}

//方法4：普通的迭代拷贝
function concat(arr1, arr2) {
    var a = [];
    for(var i=0;i<arr1.length;i++){
      a.push(arr1[i]);
    }
    for(var j=0;j<arr2.length;j++){
      a.push(arr2[j]);
    }
    return a;
}
// 题目九：指定位置添加元素
// 描述：在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组

function insert(arr, item, index) {
//复制数组
  var a = arr.slice(0);
// splice(数组开始的下标，替换/删除的长度，替换的值)
  a.splice(index, 0, item);
  return a;
 }

// 题目十：计数
// 描述：统计数组 arr 中值等于 item 的元素出现的次数

function count(arr, item){
  var count = 0;
  arr.forEach(function(e){
//e为arr中的每一个元素，与 item 相等则count+1
    e == item ? count++ : 0;
  });
  return count;
}

// 题目十一： 找出重复元素
// 描述：找出数组 arr 中重复出现过的元素

function duplicates(arr){
//声明两个数组，a数组用来存放结果，b数组用来存放arr中每个元素的个数
  var a = [],b = [];
//遍历arr，如果以arr中元素为下标的的b元素已存在，则该b元素加1，否则设置为1
  for(var i = 0; i < arr.length; i++){
    if(!b[arr[i]]){
      b[arr[i]] = 1;
      continue;
    }
    b[arr[i]]++;
  }
//遍历b数组，将其中元素值大于1的元素下标存入a数组中
  for(var i = 0; i < b.length; i++){
    if(b[i] > 1){
      a.push(i);
    }
  }
  return a;
}
 

// 题目十二：平方
// 描述：为数组 arr 中的每个元素求平方。不要直接修改数组 arr，结果返回新的数组

function square(arr){
  return arr.map(function(item,index,array){
    return item*item;
  })
}

// 题目十三：查找元素位置
// 描述：在数组 arr 中，查找值与 item 相等的元素出现的所有位置

function findAllOccurrences(arr,target){
  var temp = [];
  arr.forEach(function(val,index){
  // 如果前者为真，后者就不用执行了
    // 如果对比值不相等，就返回一个空数组
    //如果对比值相等，就把 index 添加的 空数组里
    val !== target || temp.push(index);
  });
  return temp;
}

// 题目十四：避免全局变量
// 描述：给定的 js 代码中存在全局变量，请修复

// 修复前：
function globals() {
  myObject = {
    name : 'Jory'
  };
  return myObject;
}

// 修复后：
function globals() {
//只需要在声明myObject时加上var就行了
  var myObject = {
    name : 'Jory'
  };
return myObject;
}


// 题目十五：正确的使用 parseInt
// 描述：修改 js 代码中 parseInt 的调用方式，使之通过全部测试用例

// 修复前：
function parse2Int(num) {
  return parseInt(num);
}

// 修复后：
// parseInt(string, radix) 当参数 radix 的值为 0，或没有设置该参数时，parseInt() 会根据 string 来判断数字的基数。
// 举例，如果 string 以 "0x" 开头，parseInt() 会把 string 的其余部分解析为十六进制的整数。如果 string 以 0 开头，那么 ECMAScript v3 允许 parseInt() 的一个实现把其后的字符解析为八进制或十六进制的数字。如果 string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数。
function parse2Int(num){
  return parseInt(num,10);
}

// 题目十六：完全等同
// 描述：判断 val1 和 val2 是否完全等同
function identity(val1, val2) {
  return val1 === val2; // 三个等号不仅是数值上的相等，还是类型上的 相等
}

// 题目十七：计时器
// 描述：实现一个打点计时器，要求：
// 1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
// 2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
// 3、第一个数需要立即输出

function count(start, end){
  console.log(start++);
  var timer = setInterval(function(){
    if(start <= end){
      console.log(start++);
    }else{
      clearInterval(timer);
    }
  },100);

  // 返回一个对象
  return{
    cancel: function(){
      clearInterval(timer);
    }
  };
}

// 题目十八：流程控制
// 描述：实现 fizzBuzz 函数，参数 num 与返回值的关系如下：
//1、如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
//2、如果 num 能被 3 整除，返回字符串 fizz
//3、如果 num 能被 5 整除，返回字符串 buzz
//4、如果参数为空或者不是 Number 类型，返回 false
//5、其余情况，返回参数 num

function fizzBuzz(num){
  if(num % 3 == 0 && num % 5 == 0){
    return "fizzbuzz"
  }else if(num % 3 ==0){
    return "fizz"
  }else if(num % 5 ==0){
    return "buzz"
  }else if(num == null || typeof num != "number"){
    return false;
  }else{
    return num;
  }
}

// 题目十九：函数传参
// 描述：将数组 arr 中的元素作为调用函数 fn 的参数
// 调用函数可以使用call或者apply这两个方法，区别在于call需要将传递给函数的参数明确写出来，是多少参数就需要写多少参数。而apply则将传递给函数的参数放入一个数组中，传入参数数组即可。

function argsAsArray(fn, arr) {
  return fn.apply(this, arr);
 }

// 题目二十：函数的上下文
// 描述：将函数 fn 的执行上下文改为 obj 对象
// 在JavaScript中，函数是一种对象，其上下文是可以变化的，对应的，函数内的this也是可以变化的，函数可以作为一个对象的方法，也可以同时作为另一个对象的方法，可以通过Function对象中的call或者apply方法来修改函数的上下文，函数中的this指针将被替换为call或者apply的第一个参数。将函数 fn 的执行上下文改为 obj 对象，只需要将obj作为call或者apply的第一个参数传入即可。

function speak(fn, obj) {
  return fn.apply(obj, obj);
 }

// 题目二十一： 返回函数
// 描述：实现函数 functionFunction，调用之后满足如下条件：
// 1、返回值为一个函数 f
// 2、调用返回的函数 f，返回值为按照调用顺序的参数拼接，拼接字符为英文逗号加一个空格，即 ', '
// 3、所有函数的参数数量为 1，且均为 String 类型

// 方法1： 接收2个参数
function functionFunction(str) {
  var f = function(s){
    return str + ", " + s;
  }
  return f;
}

// 题目二十二：使用闭包
// 描述：实现函数 makeClosures，调用之后满足如下条件：
// 1、返回一个函数数组 result，长度与 arr 相同
// 2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同

// 简单的描述闭包：如果在函数func内部声明函数inner，然后在函数外部调用inner，这个过程即产生了一个闭包。
// 题目要求的是返回一个函数数组，如果在循环中直接写result[i] = function(){return fn(arr[i]);}或者result.push(function(){return fn(arr[i]);})，最终的结果是不正确的，因为在每次迭代的时候，那样的语句后面的方法并没有执行，只是创建了一个函数体为“return fn(arr[i]);”的函数对象而已，当迭代停止时，i为最终迭代停止的值，在函数被调用时，i依旧为最终迭代停止的值，因此无法返回正确的结果。
// 为了解决这个问题，需要声明一个匿名函数，并立即执行它。
// function(num){return function(){return fn(arr[num]); }; }(i)，函数执行后，i立即传入并被内部函数访问到，因此就能得到正确的结果。闭包允许你引用存在于外部函数中的变量

function makeClosures(arr, fn){
  var result = [];
  arr.forEach(function(e){
    result.push(function(num){
      return function(){return fn(num);};
    }(e));
  });
  return result;
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
