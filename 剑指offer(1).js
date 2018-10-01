// 题目一：二维数组的查找 p44
// 描述：在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

function Find(target, array) {
  let i = 0;// row
  let j = array[i].length - 1; // column
  while (i < array.length && j >= 0) {
    if (array[i][j] < target) {
      i++;
    } else if (array[i][j] > target) {
      j--;
    } else {
      return true;
    }
  }
  return false;
}

// 题目二：替换空格 p51
// 描述：请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

function replaceSpace(str){
  return str.replace(/\s/g,'%20')
}

// 题目三：从尾到头打印链表
// 描述：输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。

function printListFromTailToHead(head){
    var p = head;
    var result = [];
    while(p){
      // unshift 需要添加到数组开头的元素。
      // val() 方法返回或设置被选元素的值。
        result.unshift(p.val);
        // next() 获得匹配元素集合中每个元素紧邻的同胞元素
        p = p.next;
    }
    return result;
}

// 题目四：重建二叉树 p58
// 描述：输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。

function reConstructBinaryTree(pre, vin){
  // null 是真正的空，[] 里面还有东西
    var result =null;
    if(pre.length>1){
      var root = pre[0];
      // indexOf() 方法可返回某个指定的字符串值首次出现的位置。
      // 下面开始中序遍历
      // 找到根节点的位置
      var vinRootIndex = vin.indexOf(root);
      // 根节点的左边是左子树
      var vinLeft = vin.slice(0,vinRootIndex);
      // 右边就是右子树
      var vinRight = vin.slice(vinRootIndex+1,vin.length);
      // 下面开始前序遍历：
      // shift() 把数组的第一个元素从其中删除，并返回第一个元素的值
      // 取走第一个数
      pre.shift();
      // 此时的第一个数是左子树的第一个数
      var preLeft = pre.slice(0,vinLeft.length);
      var preRight = pre.slice(vinLeft.length,pre.length);
      result={
        val:root,
        left:reConstructBinaryTree(preLeft,vinLeft),
        right:reConstructBinaryTree(preRight,vinRight)
      }

    }else if(pre.length ===1){
        result= {
            val :pre[0],
            left:null,
            right:null
        }
    }
    return result;
}

// 题目五：用两个栈实现队列 p68
// 描述：用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。

// 操作两个“先进后出”的栈实现一个“先进先出”的队列
var strack = [];
//push()向数组的末尾添加一个或多个元素，并返回新的长度。
// 第一步：末尾添加node
function push(node){strack.push(node);}
// 第二步：取得第一个元素，删除并返回最后一个元素。
function pop(){
  if(stack.length == 0)
    return false;
  return stack.shift();
}


// 题目六：旋转数组的最小数字
// 描述：把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
//二分查找法
function minNumberInRotateArray(arr){
    //二分查找
    let len = arr.length;
    if(len == 0)  return 0;
    let low = 0, high = len - 1;//???
    while(low < high) {
      //Math.floor() 返回小于或等于一个给定数字的最大整数。
        let mid = low + Math.floor((high-low)/2);
        if(arr[mid] > arr[high]) {
            low = mid + 1;
        } else if(arr[mid] == arr[high]) {
            high = high - 1;
        } else {
            high = mid;
        }
    }

    return arr[low];
}



// 题目七：斐波那契数列 p74
// 描述：大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
// 直接写 fn = f(n-1) + f(n-2)会使占用的空间变大
// 为了避免重复计算，我们可以把中间项保存起来，从下往上计算

function Fibonacci(n){
  if(n < 2){
    return n;
  }else{
    // ???
    let fNum1 = 0;
    let fNum2 = 1;
    let tmp = undefined; //也可以为 0
    while(n > 1){
      tmp = fNum2;
      fNum2 = fNum1 + fNum2;
      fNum1 = tmp;
      n--;
    }
    return fNum2;
  }
}

// 题目八：跳台阶 p77
// 描述：一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
// 其实也是一个斐波那契问题
// 第一阶和第二阶考虑过了，初始当前台阶为第三阶，向后迭代
// 思路：当前台阶的跳法总数=当前台阶【后退一阶】的台阶的跳法总数+当前台阶【后退二阶】的台阶的跳法总数
function jumpFloor(number){
  if(number === 1) return 1;
  if(number === 2) return 2;
  let next = 0 ;// 当前台阶的跳法总数
  let one_step = 2; // 当前台阶【后退一阶】的台阶的跳法总数(初始值当前台阶是第3阶)
  let two_step = 1; // 当前台阶【后退二阶】的台阶的跳法总数(初始值当前台阶是第3阶)
  for(let i = 2; i < number; i++){ //(let i = 3; i <= number; i++)
    next = two_step + one_step;
    two_step = one_step;// 后退一阶在下一次迭代变为后退两阶
    one_step = next; // 当前台阶在下一次迭代变为后退一阶
  }
  return next;
}


// 题目九：变态跳台阶 p78
// 描述：一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。

// 因为n级台阶，第一步有n种跳法：跳1级、跳2级、到跳n级
//跳1级，剩下n-1级，则剩下跳法是f(n-1)
//跳2级，剩下n-2级，则剩下跳法是f(n-2)
//所以f(n)=f(n-1)+f(n-2)+...+f(1)
//因为f(n-1)=f(n-2)+f(n-3)+...+f(1)
//所以f(n)=2*f(n-1)

function jumpFloorII(number){
  if(number <= 1){
    return 1
  }else{
    return 2*jumpFloorII(number - 1);
  }
}


// 题目十：矩形覆盖 p79
// 描述：我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
function rectCover(number){
  if(number <= 2){
    return number;
  }
  var result = 0;//假设当前台阶的跳法总数
  var one = 1;//
  var two = 2;//
  for(var i = 3; i <= number; i++){
    result = one + two;
    one = two;
    two = result;
  }
  return result;
}

// 题目十一：二进制中1的个数 p100
// 描述：输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。

//常规解法
//怎样判断一个整数的最右边是不是1？
//把整数和1做【位与运算】，看结果是不是0就知道了。
//如果结果是1，那最右边的一位就是1
function NumberOf1(n){
  var count = 0, flag = 1;
  while(flag){
    if(n&flag)count++;//将 n 和 1 做【位与运算】，判断 n 的最低位是不是 1，是 1 就加
    flag = flag << 1;//【位与运算】的结果不为1，就继续左移，反复判断 n 的其中一位是不是 1
  }
  return count;
}
//常规解法有一个bug就是不能分析出来负数，会陷入死循环


//高级解法
// 如果一个整数不为0，那么这个整数至少有一位是1。如果我们把这个整数减1，那么原来处在整数最右边的1就会变为0，原来在1后面的所有的0都会变成1(如果最右边的1后面还有0的话)。其余所有位将不会受到影响。
// 举个例子：一个二进制数1100，从右边数起第三位是处于最右边的一个1。减去1后，第三位变成0，它后面的两位0变成了1，而前面的1保持不变，因此得到的结果是1011.我们发现减1的结果是把最右边的一个1开始的所有位都取反了。这个时候如果我们再把原来的整数和减去1之后的结果做与运算，从原来整数最右边一个1那一位开始所有位都会变成0。如1100&1011=1000.也就是说，把一个整数减去1，再和原整数做与运算，会把该整数最右边一个1变成0.那么一个整数的二进制有多少个1，就可以进行多少次这样的操作。
function NumberOf1(n){
  var count = 0;
  while (n){
   count++;
   n = (n-1)&n;//把最右边的一个1变成0
}
  return count;
}
