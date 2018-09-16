// 题目一： 修改 this 指向
// 描述：封装函数 f，使 f 的 this 指向指定的对象

// call和apply为立即调用所以需要用一个匿名函数包装并返回且需要传入原函数参数arguments,arguments为伪数组所以只能使用apply
function bindThis(func, oTarget){
  return function(){
    return func.apply(oTarget, arguments);
  };
}

// bind()会创建一个新函数且加上原绑定函数运行时本身的参数，所以可以直接return且无需传入arguments
function bindThis(f, oTarget){
  return  f.bind(oTarget);
}

// 题目二：获取 url 参数
// 描述：
//1. 指定参数名称，返回该参数的值 或者 空字符串
//2. 不指定参数名称，返回全部的参数对象 或者 {}
//3. 如果存在多个同名参数，则返回数组

function getUrlParam(sUrl,sKey){
    var result = {};
    // a，模式的匹配项；
    // k，第一个捕获组的匹配项；
    // v，第二个捕获组的匹配项。

    // [\w+]相当于[A-Za-z0-9_+]。匹配字符集合中的任意一个，所以出现的结果是分隔开的元素。

    sUrl.replace(/\??(\w+)=(\w+)&?/g,function(a,k,v){
      //void 0 是 undefined 的意思
      if(result[k] !== void 0){
        var t = result[k];
        result[k] = [].concat(t,v);
      }else{
        result[k] = v;
      }
    });
    if(sKey === void 0){
      return result;
    }else{
      return result[sKey] || '';
    }
}

// 题目三：dom 节点查找
// 描述：查找两个节点的最近的一个共同父节点，可以包括节点自身

//不用去递归
//也 不用管谁包含谁，只要随便找一个节点，直到某个祖先节点（或自己）包含另一个节点就行了。 oNode.contains(oNode)是等于true的

function commonParentNode(onode1,onode2){
  for(;onode1;onode1 = onode1.parentNode){
    if(onode1.contains(onode2)){
      return onode1;
    }
  }
}


// 题目四：根据包名，在指定空间中创建对象
// 输入：namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
// 输出：{a: {test: 1, b: {c: {d: {}}}}}

function namespace(oNamespace, sPackage) {
  var arr = sPackage.split('.');
  var res = oNamespace;   // 保留对原始对象的引用

  for(var i = 0, len = arr.length; i < len; i++) {
    if(arr[i] in oNamespace) {  // 空间名在对象中
      if(typeof oNamespace[arr[i]] !== "object") {    // 为原始值
              oNamespace[arr[i]] = {};    // 将此属性设为空对象
      }
    }else { // 空间名不在对象中，建立此空间名属性，赋值为空
        oNamespace[arr[i]] = {};
    }
    oNamespace = oNamespace[arr[i]];    // 将指针指向下一个空间名属性。
  }
  return res;
}

// 题目五：数组去重
// 描述 ： 为 Array 对象添加一个去除重复项的方法

Array.prototype.uniq = function(){
  var resArr = [];
  var flag = true;

  for(var i = 0; i < this.length; i++){
    // indexOf是判断resArr数组中的值和当前的值有没有相同的，如果有相等的会返回那个位置，没有相同的返回-1，这里返回-1的意思是没有相同的，也就是resArr数组里还没有当前的数。再之后再遇到有相同的就不会返回-1了，也就不会继续执行if里面的了
    if(resArr.indexOf(this[i]) == -1){
      // this[i] != this[i];对比的是同一个对象; {}!={}对比的是两个对象
      // NaN != NaN 返回的是true  NaN ===NaN 返回的false  所以需要判断NaN
      if(this[i] != this[i]){ //排除NaN
        if(flag){
          // 那我就把 不重复的这些都加在数组里
          resArr.push(this[i]);
          flag = false;
        }
      }else{// 如果有相同的项
        resArr.push(this[i]);
      }
    }
  }
  return resArr;
}


// 题目六：斐波那契数列
// 描述 ： 用 JavaScript 实现斐波那契数列函数,返回第n个斐波那契数。 f(1) = 1, f(2) = 1 等

function fibonacci(n){
  if(n==1||n==2)
    return 1;
    // 这不就是递归吗
  return fibonacci(n-1)+fibonacci(n-2);
}

// 题目七：时间格式化输出
// 输入：formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w')
// 输出：2014-09-05 13:14:20 星期五

function formatDate(t,str){
  var obj = {
    yyyy:t.getFullYear(),
    yy:(""+ t.getFullYear()).slice(-2),

    M:t.getMonth()+1,
    MM:("0"+ (t.getMonth()+1)).slice(-2),

    d:t.getDate(),
    dd:("0" + t.getDate()).slice(-2),

    H:t.getHours(),
    HH:("0" + t.getHours()).slice(-2),

    h:t.getHours() % 12,
    hh:("0"+t.getHours() % 12).slice(-2),

    m:t.getMinutes(),
    mm:("0" + t.getMinutes()).slice(-2),

    s:t.getSeconds(),
    ss:("0" + t.getSeconds()).slice(-2),

    w:['日', '一', '二', '三', '四', '五', '六'][t.getDay()]
  };
  return str.replace(/([a-z]+)/ig,function($1){return obj[$1]});
}

// 题目八：获取字符串的长度
// 描述：如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1
// 否则如果字符 Unicode 编码 > 255 则长度为 2

function strLength(s,bUnicode255For1){
  if(bUnicode255For1){
    return s.length;//这里不能等于1
  }else{
    var len = s.length;
    for (var i = 0; i < s.length; i++){
      if(s.charCodeAt(i) > 255){
        len++;
      }
    }
    return len;
  }
}

// 题目九：邮箱字符串判断

function isAvailableEmail(sEmail) {
  var reg=/^([\w+\.])+@\w+([.]\w+)+$/;
  return reg.test(sEmail);
}

// 题目十：颜色字符串转换
// 描述：将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
// rgb 中每个 , 后面的空格数量不固定
// 十六进制表达式使用六位小写字母
// 如果输入不符合 rgb 格式，返回原始输入



function rgb2hex(sRGB) {
    var regexp=/rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
    var ret=sRGB.match(regexp);
    if(!ret){
        return sRGB;
    }else{
        var str='#';
        for(var i=1;i<=3;i++){
            var m=parseInt(ret[i]);
            if(m<=255&&m>=0){
                str+=(m<16?'0'+m.toString(16):m.toString(16));
            }else{
                return sRGB;
            }
        }
        return str;
    }
}

function rgb2hex(sRGB) {
   return sRGB.replace(/^rgb\((\d+)\s*\,\s*(\d+)\s*\,\s*(\d+)\)$/g, function(a, r, g, b){
       return '#' + hex(r) + hex(g) + hex(b);
   });
}
function hex(n){
    return n < 16 ? '0' + (+n).toString(16) : (+n).toString(16);
}

// 题目十一：将字符串转换为驼峰格式
// 描述：css 中经常有类似 background-image 这种通过 - 连接的字符，通过 javascript 设置样式的时候需要将这种样式转换成 backgroundImage 驼峰格式，请完成此转换功能
// 1. 以 - 为分隔符，将第二个起的非空单词首字母转为大写
// 2. -webkit-border-image 转换后的结果为 webkitBorderImage

function cssStyle2DomStyle(sName) {
  return sName.replace(/(?!^)\-(\w)(\w+)/g, function(a, b, c){
    return b.toUpperCase() + c.toLowerCase();
  }).replace(/^\-/, '');
}

// 题目十二： 字符串字符统计
// 描述： 统计字符串中每个字符的出现频率，返回一个 Object，key 为统计字符，value 为出现频率
// 1. 不限制 key 的顺序
// 2. 输入的字符串参数不会为空
// 3. 忽略空白字符

function count(str) {
  var obj = {};
  str.replace(/\S/g,function(s){
    !obj[s]?obj[s]=1:obj[s]++;
  })
  return obj;
}
