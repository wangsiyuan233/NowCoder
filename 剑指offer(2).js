

// 十二、数值的整数次方 p110
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

//十三、调整数组顺序使奇数位于偶数前面
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



//  十四、链表中倒数第k个结点
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

// 十五、反转链表 p142
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


//十六、合并两个排序的链表 p145
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

//十七、树的子结构 p148
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

// 十八、二叉树的镜像 p157
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

// 十九、顺时针打印矩阵 p161
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

//二十、包含min函数的栈 p165
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

// 二十一、栈的压入、弹出序列 p168
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

// 二十二 从上往下打印二叉树 p171
// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
// 引申一下：打印前序遍历会吗？中序会吗？
function PrintFromTopToBottom(root){
    var arr=[];
    var data=[];
    if(root!=null){
      // 空数组后面首先跟着的是 根节点
        arr.push(root);
    }
    while(arr.length!=0){
      // node 是取出数组的第一个元素 （所以 node 和 root 的关系是？？？）
        var node=arr.shift();
        // 第一元素的左子树不为空时，把左子树加在 arr 后面
        if(node.left!=null){
            arr.push(node.left);
        }
        if(node.right!=null){
            arr.push(node.right);
        }
        // node 首先取得了 arr 的第一个元素，接着是 左节点 ，最后是右节点
        // 这个过程是循环的，不断的是 首 -- 左 -- 右
        // 所以为什么需要一个 data 空数组？？？
        data.push(node.val);
    }
    return data;
}
