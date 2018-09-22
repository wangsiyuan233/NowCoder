// 题目一：二维数组的查找
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

// 题目二：替换空格
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

// 题目四：重建二叉树
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

// 题目五：用两个栈实现队列
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
function minNumberInRotateArray(rotateArray){
  if(rotateArray.length==0) return 0;
  var minNum=Math.min.apply(Math,rotateArray);
  return minNum;
}



// 题目七：斐波那契数列
// 描述：大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。

function Fibonacci(n){
  if(n==0) {
    return n;
  }else{
    var pre =0; //前一个值
        cur =1 // 当前值
    for(var i=2;i<=n;i++){
      cur += pre; //???
      pre = cur - pre; //???
    }
    return cur;
  }
}



// 题目
// 描述：


// 题目
// 描述：


// 题目
// 描述：


// 题目
// 描述：


// 题目
// 描述：


// 题目
// 描述：

// 题目
// 描述：



// 题目
// 描述：


// 题目
// 描述：


// 题目
// 描述：


// 题目
// 描述：


// 题目
// 描述：


// 题目
// 描述：


// 题目
// 描述：


// 题目
// 描述：



// 题目
// 描述：


// 题目
// 描述：


// 题目
// 描述：


// 题目
// 描述：


// 题目
// 描述：


// 题目
// 描述：


// 题目
// 描述：
