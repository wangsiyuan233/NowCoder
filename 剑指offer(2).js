// 十二、二进制中1的个数p100

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

// 十三、数值的整数次方 p110
//
//给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

function Power(x,n){
    if(n < 0) { //指数 n 小于 0
        if(x <= 0) { //底数 x 小于等于 0
            throw new Error("分母不能小于等于0");
        }else { //底数 x 大于 0
            if(-n % 2 == 1) { //指数 n 的绝对值是偶数
                return 1/(Power(x,-n-1) * x);
            }else {//指数 n 的绝对值是奇数
                var r = 1/Power(x,-n/2);
            return r * r;
            }
        }
    }
    if(n == 0) {//指数 n 等于 0
        return 1;
    }
    else {//指数 n 大于 0
        if(n % 2 == 1) { //指数 n 是偶数
            return Power(x,n-1) * x;
        }else {//指数 n 是奇数
            var r = Power(x,n/2);
            return r * r;
        }
    }

}

//十四、调整数组顺序使奇数位于偶数前面
//输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
function reOrderArray(array){
    var arr1=[],arr2=[];
    for(var i=0;i<array.length;i++){
        if(array[i]%2!=0){
          arr1.push(array[i]);
        }else{
          arr2.push(array[i]);
        }
    }
    return arr1.concat(arr2);
}

// 为啥 C 和 JAVA 要面临那么多指针的问题，这个又让JS躲过去了



//  十五、链表中倒数第k个结点
//  输入一个链表，输出该链表中倒数第k个结点。
//
function FindKthToTail(head, k){
  var arr = [];
  while(head!=null){
    arr.push(head);
    head = head.next;
  }
  return arr[arr.length-k];
}

// 十六、反转链表 p142
// 输入一个链表，反转链表后，输出新链表的表头。
//
function ReverseList(pHead) {
    if (pHead == null) {
        return false;
    }
    var p1 = pHead;//旧表的表头？？？
    var p2 = null;//新表的表头？？？
        temp = null;
    while (p1) {
      // 左右子树的交换、链表的反转，都需要左右手
        temp = p1.next;
        p1.next = p2;
        p2 = p1;
        p1 = temp;
    }
    return p2;
}


//十七、合并两个排序的链表 p145
//输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。

function Merge(pHead1, pHead2){
    if (pHead1 == null || pHead2 == null) { //判断是不是空链表
        return pHead1 || pHead2;
    }
    var head = null;
    if (pHead1.val < pHead2.val) {
        head = pHead1;
        head.next = Merge(pHead2,pHead1.next)
    }
    else {
        head = pHead2;
        head.next = Merge(pHead1, pHead2.next);
    }
    return head;
}

//十八、树的子结构 p148
//输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
//

function isSubtree(root1, root2){
    //如果小树已经遍历完了都能对应的上，返回true
    if (root2 == null) return true;
    //如果小树还没有遍历完，大树却遍历完了。返回false
    if (root1 == null) return false;
      //如果找到了对应小树的根节点的点
    if (root1.val == root2.val) {
      //以这个根节点为起点判断大树是否包含小树
        return isSubtree(root1.left, root2.left)
          && isSubtree(root1.right, root2.right);
    }else{
        return false;
    }
}
function HasSubtree(pRoot1, pRoot2){
   //当 大树 和 小树 都不为零的时候，才进行比较。否则直接返回false
   if (pRoot1 == null || pRoot2 == null){
       return false;
   }
    return isSubtree(pRoot1, pRoot2)
    //如果找不到，那么就再去root的左儿子当作起点，去判断时候包含 小 树
        || HasSubtree(pRoot1.left, pRoot2)
    //如果还找不到，那么就再去root的右儿子当作起点，去判断时候包含 大 树
        || HasSubtree(pRoot1.right, pRoot2);
}

// 十九、二叉树的镜像 p157
// 操作给定的二叉树，将其变换为源二叉树的镜像。
// 前序遍历首先访问 根结点 然后遍历左子树，最后遍历右子树。在遍历左、右子树时，仍然先访问根结点，然后遍历左子树，最后遍历右子树。
function Mirror(root){
    if(root == null){
        return ;
    }
    // 下面这个是左右手交换的意思吧
    var temp=root.left;
    root.left=root.right;
    root.right=temp;
    if(root.left) Mirror(root.left);
    if(root.right) Mirror(root.right);
}

// 二十、顺时针打印矩阵 p161
// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字

function printMatrix(matrix){
    if(matrix == null || matrix.length == 0){
        return;
    }
    var cols = matrix[0].length; // 纵
    var rows = matrix.length; // 横
    var start = 0;
    var result = [];

    //根据作者的推理，让循环继续的条件是：
    // rows > startY * 2 且 cols > startX x 2
    while(rows > start * 2 && cols > start * 2){
        var endX = cols - 1 - start,
            endY = rows - 1 - start;

        //从左到右打印
        for(var i = start; i <= endX; i++){
            result.push(matrix[start][i]);
        }

        //从上到下打印
        if(start < endY){
            for(var i = start + 1; i <= endY; i++){
                result.push(matrix[i][endX]);
            }
        }

        //从右到左打印
        if(start < endX && start < endY){
            for(var i = endX - 1; i >= start ; i--){
                result.push(matrix[endY][i]);
            }
        }

        //从下到上打印
        if(start < endX && start < endY - 1){
            for(var i = endY - 1; i >= start + 1; i--){
               result.push(matrix[i][start]);
            }
        }
        start++;
    }
    return result;
}

//二十一、包含min函数的栈 p165
//定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
// 为什么JAVA 啊 都是指针，为什么在这种查找的题目里面JS都是直接用啊？？不愧疚吗？？
var stack = [];
function push(node){
    stack.push(node);
}
// 删除最后一个元素，并返回它
function pop(){
    return stack.length==0?null:stack.pop();
}
// 取第一个元素
function top(){
    return stack.length==0?null:stack[0];
}
function min(){
    return Math.min.apply(this,stack);
}

// 二十二、栈的压入、弹出序列 p168
// 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）
//

function IsPopOrder(pushV, popV){ // 进站 出栈
     if(pushV.length === 0 || popV.length === 0){
        return;
    }
    // 借用一个辅助的栈
    var temp = [];
    var popIndex = 0;
    for(var i=0;i<pushV.length;i++){
      // 将原数列依次压入辅助栈，
        temp.push(pushV[i]);
      // 【栈顶元素】与 所给的【出栈队列】相比，如果 相同 则出栈
        while(temp.length && temp[temp.length-1] === popV[popIndex]){
          temp.pop();
          popIndex++;
        }
    }
    return (temp.length === 0);
}
