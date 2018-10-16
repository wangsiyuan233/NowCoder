//一、 二维数组中的查找 p44
// 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
function Find(target, array) {
  let i = 0;// column 竖列
  let j = array[i].length - 1; // row 横行
  while (i < array.length && j >= 0){
    if (array[i][j] < target) {
      i++;
    } else if (array[i][j] > target){
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


// 六、旋转最小数 p82
// math.min.apply(null,arr)
// 总结 math.min 是取最小值，但是它是一个一个数字的取，并不能支持数组
// 所以 apply 的第一个参数是什么根本不重要，重要的是为了把第二个参数（设置为数组）传进去，找到了最小数，就把他们搬到数组的头部

//二分查找法
function minNumberInRotateArray(arr){
  let len = arr.length;
  if(len == 0)  return 0;
// 两个指针，最左边和最右边，此时第一个元素应该是大于最后一个元素的（没有重复的元素）。
  let left = 0, right = len - 1;
  while(left < right) {
//Math.floor() 返回小于或等于一个给定数字的最大整数。
  let mid = left + Math.floor((right-left)/2);
//中间元素大于最后一个元素，则中间元素位于前面的递增子数组，此时最小元素位于中间元素的后面。我们可以让第一个指针left指向中间元素的后一个元素。
  if(arr[mid] > arr[right]){
    left = mid + 1;
// 中间元素位于后面的递增子数组，此时最小元素位于中间元素的前面
    }else if(arr[mid] == arr[right]){
      right = right - 1;
    }else{
      right = mid;
    }
  }
  return arr[left];
}

// 七、斐波那契 p74
//
// 直接写 fn = f(n-1) + f(n-2)会使占用的空间变大
// 套路请熟记
function Fibonacci(n){
    if(n==0){return 0;}
    if(n==1){return 1;}
    var one = 0,two=1;
    var fbnum=1;
    for(var i =2;i<=n;i++){
        fbnum = one+two;
        one = two;
        two = fbnum;
    }
    return fbnum;
}
// 八、跳台阶 p77
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

// 九、变态跳台阶 p78
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



// 十、矩形覆盖 p79
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

//十一、二进制中1的个数p100

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

// 十二、数值的整数次方 p110
//
//给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。

function Power(x,n){
    if(n < 0) { //指数 n 小于 0
        if(x <= 0) { //底数 x 小于等于 0
            throw new Error("分母不能小于等于0");
        }else { //底数 x 大于 0
            if(-n % 2 == 1) { //指数 n 的绝对值是奇数
              return 1/(Power(x,-n-1) * x);
            }else {//指数 n 的绝对值是偶数
              var r = 1/Power(x,-n/2);
            return r * r;
            }
        }
    }
    if(n == 0) {//指数 n 等于 0
        return 1;
    }
    else {//指数 n 大于 0
        if(n % 2 == 1) { //指数 n 是奇数
            return Power(x,n-1) * x;
        }else {//指数 n 是偶数
            var r = Power(x,n/2);
            return r * r;
        }
    }

}

//十三、调整数组顺序使奇数位于偶数前面 p129
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



//  十四、链表中倒数第k个结点 p134
//  输入一个链表，输出该链表中倒数第k个结点。本题从 1 开始计数，即链表的尾节点是倒数第 1 个节点。
//
function FindKthToTail(head, k){
    if(head == null || k <= 0) return false; //表头为空指针 和 k为 0  都会原地爆炸
    var p1 = head;
    var p2 = head;

    for (var i = 1; i < k; i++) {// 链表的节点数要大于 K 吧
        if (p1.next != null) {
            p1 = p1.next;
        }
        else {return false;}
    }
    while (p1.next != null){
        p1 = p1.next;
        p2 = p2.next;
    }
    return p2;
}

// 十五、反转链表 p142
// 输入一个链表，反转链表后，输出新链表的表头。
//
function ReverseList(pHead) {
    if (pHead == null) {
        return false;
    }
    var p1 = pHead;//旧表的表头
    var p2 = null;//新表的表头就是旧表的表尾，现在为空
        temp = null;
    while (p1) {
      // 链表的反转 和 左右子树的交换，都需要左右手
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
    }else {
        head = pHead2;
        head.next = Merge(pHead1, pHead2.next);
    }
    return head;
}

//十七、树的子结构 p148
//输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
//

// 第一步判断 大树 和 小树 的左右腿长度都是一样的吧？
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

// 第二步判断两棵树是否有相同的值
function isSubtree(root1, root2){
    //如果小树已经遍历完了都能对应的上，返回true
    if (root2 == null) return true;
    //如果小树还没有遍历完，大树却遍历完了。返回false
    if (root1 == null) return false;
      //如果找到了对应小树的根节点的点
    if (root1.val == root2.val) {
      //以这个根节点为起点判断大树是否包含小树
      // 如果有相同的值，就递归判断下面的 子树 是不是也相等
        return isSubtree(root1.left, root2.left)
          && isSubtree(root1.right, root2.right);
    }else{
        return false;
    }
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
// 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。
//假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）
//

function IsPopOrder(pushV, popV){ // 进栈 出栈
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
      // node 是节点，root 是根节点
        var node=arr.shift();
        // 第一元素的左子树不为空时，把左子树加在 arr 后面
        if(node.left!=null){
            arr.push(node.left);
        }
        if(node.right!=null){
            arr.push(node.right);
        }
        // 首先取得了 arr 的第一个节点 node，接着是 左子节点 ，最后是右子节点
        // 这个过程是循环的，不断的是 首 -- 左 -- 右
        // 所以为什么需要一个 data 空数组？？？
        data.push(node.val);
    }
    return data;
}

// 二十三 二叉搜索树的后序遍历序列 p179
// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
//
// BST的后序序列的合法序列是，对于一个序列S，最后一个元素是x （也就是根），如果去掉最后一个元素的序列为T，那么T满足：T可以分成两段，前一段（左子树）小于x，后一段（右子树）大于x，且这两段（子树）都是合法的后序序列。完美的递归定义 : ) 。
//
function VerifySquenceOfBST(sequence){
    if(sequence==null||sequence.length<=0){
        return false;
    }
    return Verify(sequence);
 }

function Verify(sequence){
    if(sequence.length<=3){
        return true;
    }
    var root=sequence[sequence.length-1];//根节点
    var left=[];
    var right=[];

    // 左子树小于根节点
    for(var i=0; i<sequence.length; i++){
        if(sequence[i]>=root){//[0,i-1]就是左子树，[i,length-1]右子树
            left=sequence.slice(0,i);// 这里没有 i
            right=sequence.slice(i,sequence.length-1);//注意slice是左闭右开
            break;
        }
    }


    if(right.length===0){
        return true;
    }

    // 右子树大于根节点
    for(var j=i;j<sequence.length-1;j++){ //刚开始写的right.length
        if(sequence[j]<root){ //不是right[j]而是sequence[j];
            return false;
        }
    }


    var leftResult = Verify(left);
    var rightResult = Verify(right);
    return leftResult && rightResult;
}

// 二十四 二叉树中和为某一值的路径 p182
// 输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。(注意: 在返回值的list中，数组长度大的数组靠前)
//
function FindPath(root, expectNumber) {
    var result = [];
    if (root === null) {
        return [];
    }
    dfsFind(root, expectNumber, [], 0, result);
    return result;
}

function dfsFind(root, expectNumber, path, currentSum, result) {
    //前序遍历二叉树，每次更新当前路径的和 currentSum；
    currentSum += root.val;
    path.push(root.val);

    //判断 currentSum 是否等于 expectNumber,以及 当前结点是否是叶子结点。如果是，把当前路径保存在 result 结果中；
    if (currentSum == expectNumber && root.left == null && root.right == null) {
        result.push(path.slice(0));
    }
    if (root.left != null) {
        dfsFind(root.left, expectNumber, path, currentSum, result);
    }

    if (root.right != null) {
        dfsFind(root.right, expectNumber, path, currentSum, result);
    }

    // 这一步很关键，把所有push进去的每一个元素在递归执行完成之时都弹出来，使得stack每次都是重头来过
    path.pop();

}

// 二十五 复杂链表的复制 p187
// 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
//

//解题思路：
// 1、遍历链表，复制每个结点，如复制结点A得到A1，将结点A1插到结点A后面；
// 2、重新遍历链表，复制老结点的随机指针给新结点，如A1.random = A.random.next;
// 3、拆分链表，将链表拆分为原链表和复制后的链表

// 有图片记得添加哦
function Clone(pHead) {
    if (!pHead) {return null;}
    var newHead = new RandomListNode(pHead.label);
    newHead.random = pHead.random;
    newHead.next = Clone(pHead.next);
    return newHead;
}

//  二十六、二叉搜索树与双向链表 p191
//  输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。

function Convert(pRootOfTree){
    if(pRootOfTree == null){return null;}
    if(pRootOfTree.right == null && pRootOfTree.left == null) {
      return pRootOfTree;
    }
    // 1.将左子树构造成双链表，并返回链表头节点
    var left = Convert(pRootOfTree.left);
    var p =left;
    // 2.定位至左子树双链表最后一个节点
    while(p!=null&&p.right!=null){p = p.right;}
    // 3.如果左子树链表不为空的话，将当前root追加到左子树链表
    if(left!=null){
        p.right = pRootOfTree;
        pRootOfTree.left = p;
    }
     // 4.将右子树构造成双链表，并返回链表头节点
    var right = Convert(pRootOfTree.right);
     // 5.如果右子树链表不为空的话，将该链表追加到 root 节点之后
    if(right){
        right.left = pRootOfTree;
        pRootOfTree.right = right;
    }
    // 6.根据左子树链表是否为空确定返回的节点。
    return left!==null?left:pRootOfTree;
}

// 二十七、字符串的排列 p197
// 输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
// 有图片28
function Permutation(str){
    var strArr = str.split("").sort();  //字母先进行分开 + 排序
    var result = [];
    for(var i = 0; i < strArr.length; i++){
        //当相邻元素相同时，则跳过此次循环
        if((i > 0) && (strArr[i] == strArr[i - 1])) continue;
        //截取前面部分
        var front  = strArr.slice(0, i);
        //截取后面部分
        var end = strArr.slice(i + 1);
        excuteFind(result, strArr[i], front.concat(end));
    }
    return result;
}

function excuteFind(result, mid, strArr){
    if(strArr.length == 0){
      result.push(mid);
    }else{
      for(var i = 0; i < strArr.length; i++){
        if((i > 0) && (strArr[i] == strArr[i - 1])) continue;
        var front = strArr.slice(0, i);
        var end = strArr.slice(i + 1);
        excuteFind(result, mid + strArr[i], front.concat(end));
      }
    }
}

// 二十八、数组中出现次数超过一半的数字 p205
// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
//
//
function MoreThanHalfNum_Solution(numbers){
    var arr = [],
        len = numbers.length,
        a;
    for(var i = 0; i < len; i++){
        a = numbers[i];
        if(arr[a]){
          // 如果下一个数字和之前保存的数字相同，就 + 1
            arr[a]++;
        }else{
          // 如果下一个数字和之前保存的数字相同，就 为 1
            arr[a] = 1;
        }
    }

    for(var i = 0; i < arr.length; i++){
      // 如果这个数超过了一半 ，就返回这个数
        if(arr[i] > len/2){
            return i;
        }
    }
    return 0;
}

// 二十九、最小的K个数 p209
// 输入n个整数，找出其中最小的K个数。例如输入4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4,。
//
//这题 剑指offer上 还用到了红黑树，但是对于 JS 而言却是无效的。。。
//
function GetLeastNumbers_Solution(input, k){
  // 把输入的数组从小到大排列
    var result = input.sort(function(a,b){
        return a-b;
    });
    return result.length>=k?result.slice(0,k):[];
}

// 三十、连续子数组的最大和 p281
// 输入一个整型数组，数组里有整数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。要求时间复杂度为 O(n).
//
function FindGreatestSumOfSubArray(array){
    if(array.length < 0) return false;
    var len = array.length,
        sum = array[0],//记录当前所有子数组的和的最大值
        temp = array[0]; //包含array[i]的连续数组最大值
    for(var i = 1; i < len; i++){
      // 当连续数组小于 0 时，之前的累加被抛弃，从现在开始算起
      // 当连续数组大于 0 时，继续累加
      // 牛逼牛逼！
        temp = (temp < 0) ? array[i] : temp + array[i];
      // 如果 连续数组 的值大一些，就取连续数组的值 作为 最后的值
        sum = (temp > sum) ? temp : sum;
    }
    return sum;
}

//三十一、整数中1出现的次数（从1到n整数中1出现的次数） p221
// 输入一个整数 n ，求 1 - n 这 n 个整数的十进制表示中 1 出现的次数。
//
// 解法一、不考虑时间效率，对每个数字都进行除法和求余
function NumberOf1Between1AndN_Solution(n){
    // write code here
    var counts,num;
    counts = 0;
    if(n < 1){
        return 0;
    }
    for(var i = 1;i <= n;i++){
        num = i;
       //num = num%10;
        while(num > 0){
            if(num%10 == 1){
                counts++;
            }
            num = Math.floor(num/10);
        }
    }
    return counts;
}

// 解法二、递归法
function NumberOf1Between1AndN_Solution(n){
    if(n<0) return 0;
    var high=n,low,temp,cur,num=0,i=1;
    while(high!=0){
      // pow() 是 10 的 i 次方
      // parseInt() 是返回一个整数
      //  % 是求余数  / 是求余数
        high = parseInt(n/Math.pow(10,i));
        temp = n%Math.pow(10,i);
        cur = parseInt(temp/Math.pow(10,i-1));
        low = temp%Math.pow(10,i-1);
        if(cur ===1){
            num += high*Math.pow(10,i-1) + low + 1;
        }else if(cur < 1){
            num += high*Math.pow(10,i-1);
        }else{
            num += (high+1)*Math.pow(10,i-1);
        }
        i++;
    }
    return num;
}

// 三十二、把数组排成最小的数 p227
// 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
// 此刻我开始思考，我是不是漏了什么？从刚开始的偷懒到现在的惶恐，为什么我不用思考时间复杂度，空间的问题，这是 JS 的唯一解吗。有没有更好的方法？
function PrintMinNumber(numbers){
    numbers.sort(function(num1,num2){
     num1 = num1.toString();
     num2 = num2.toString();
    if(parseInt(num1+num2)>parseInt(num2+num1)){
      return 1
    }else{
      return -1
    }
});
    // 通过空格分割字符串
    return numbers.join('');
}

// 三十三、 丑数 p240
// 把只包含质因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含质因子7。 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
function GetUglyNumber_Solution(index){
    if(index == 0){
        return 0;
    }
   //two，three，five分别为三个队列的指针，uglyArr为从队列头选出来的最小数
    var uglyArr = [1],
        two = 0,
        three = 0,
        five = 0;
    for(var i=1;i<index;i++){
       //选出三个队列头最小的数【？？？？？？？？？？？？？？？？？？？？？？？
        uglyArr[i] = Math.min(uglyArr[two]*2,uglyArr[three]*3,uglyArr[five]*5);
      //这三个if有可能进入一个或者多个，进入多个是三个队列头最小的数有多个的情况
        if(uglyArr[i]==uglyArr[two]*2)two++;
        if(uglyArr[i]==uglyArr[three]*3)three++;
        if(uglyArr[i]==uglyArr[five]*5)five++;
    }
    return uglyArr[index-1];
}


// 三十四、第一个只出现一次的字符 p243
// 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）.

function FirstNotRepeatingChar(str){
    for(let i=0; i < str.length; i++){
    // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
    // lastIndexOf() 方法可返回一个字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
    if(str.indexOf(str[i]) == str.lastIndexOf(str[i])){
      return i;
    }
  }
  return -1;
}
// C++ 用了 哈希，扫描了两次。值得注意的是 C++ 的速度和内存远小于 JS

// 三十五、数组中的逆序对 P249
// 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的结果输出。 即输出P%1000000007

// 这题我实在做不到，已经看着发呆了好几个小时了，完全不行，放弃
function InversePairs(data){
    if(!data||data.length<2) return 0;

    var copy = data.slice(),
        count = 0;
    count = mergeSort(data,copy,0,data.length-1);
    return count%1000000007;
}

function mergeSort(data,copy,start,end){
    if(end===start) return 0;
    // 14（即二进制的 00001110）左移两位等于 56（即二进制的 00111000）
    // 所以我为什么需要右移一位呢？
    var mid = (end-start)>>1,
        left = mergeSort(copy,data,start,start+mid),
        right = mergeSort(copy,data,start+mid+1,end),
        count = 0,
        p = start+mid,//前一个数组的最后一个下标
        q = end,//后一个数组的最后一个下标
        copyIndex = end;//辅助数组下标，从最后一个算起

    while(p>=start&&q>=start+mid+1){
        if(data[p]>data[q]){
            count+=q-start-mid;
            copy[copyIndex--] = data[p--];
        }else{
            copy[copyIndex--] = data[q--];
        }
    }

    while(p>=start){
        copy[copyIndex--] = data[p--];
    }

    while(q>=start+mid+1){
        copy[copyIndex--] = data[q--];
    }
    return left+right+count;
}

// 三十六、两个链表的第一个公共结点 p253
// 输入两个链表，找出它们的第一个公共结点。
function FindFirstCommonNode(pHead1, pHead2){
    var p1=pHead1;
    var p2=pHead2;
    while(p1!=p2){
      // 先判断后面一个等号
      // 第一个链表的头部如果不存在，就等于第二个链表的头部；如果存在，头部就等于自己的下一个元素
        p1= p1==null?pHead2:p1.next;
        p2= p2==null?pHead1:p2.next;
    }
    return p1;
}
// 只有谈到链表，就会有head
// JS没有用到书上说的比较长度的方法
// 本题是用 栈 的特点来解决；
// 分别把两个链表的节点放到两个栈中，这样两个链表的尾节点就位于两个栈的栈顶，接下来比较两个栈顶的节点是否相同；
// 如果相同，则把栈顶弹出，接着比较下一个栈顶，直到找到最后一个相同的节点。

// 三十七、数字在排序数组中出现的次数 p263
// 统计一个数字在排序数组中出现的次数。
// 看见有序就想到了二分查找法

function GetNumberOfK(data,k) {
   var count =0;
    for(var i =0 ;i<data.length;i++){
        if(data[i]==k){
            count++;
        }
    }
    return count;
}
// 只要发现了 k，就计数一次，太可怕了多浪费内存啊
// 发现 JAVA 和 C 也是这样写的，可怕

// 三十八、二叉树的深度 p271
// 输入一棵二叉树，求该树的深度。从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，最长路径的长度为树的深度。
// 递归
function TreeDepth(pRoot){
    if(!pRoot) return 0;
    var left = 1 + TreeDepth(pRoot.left);
    var right = 1+ TreeDepth(pRoot.right);
    return Math.max(left,right)
}

// 三十九、平衡二叉树 p273
// 输入一棵二叉树，判断该二叉树是否是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
// 用后序遍历的方法，就可以一边遍历一边判断每个节点是不是平衡的了。
function IsBalanced_Solution(pRoot){ // 根节点
    if(!pRoot) return true;
    return Math.abs(height(pRoot.left)-height(pRoot.right))<=1;

    function height(node){ // 普通节点
      // 压根不存在普通节点，那就只有根节点，单数就不算平衡吧哈哈
        if(!node) return 0;
      // 根节点的左边不存在 且 根节点的右边不存在，算平衡
        if(!(node.left) && !(node.right)) return 1;
      // 正常的左右子树的节点都存在，那就比较一下，取最大值
        return Math.max(height(node.left),height(node.right))+1;
    }
}

// 四十、数组中只出现一次的数字 p275
// 一个整型数组里除了两个数字之外，其他的数字都出现了偶数次。请写程序找出这两个只出现一次的数字。

// 下面放了三个我完全看不懂的方法，留给第二轮的自己。。呵呵

// 方法一
function FindNumsAppearOnce(array){
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    var arr = [];
    for(var i = 0; i < array.length; i++) {
        if(array.indexOf(array[i]) === array.lastIndexOf(array[i])) {
            arr.push(array[i]);
        }
    }
    return arr;
}

// 方法二
function FindNumsAppearOnce(array){
    var obj={}; // 为啥？
    var arr=[]; // 为啥？
    var length=array.length;
    for(var i=0;i<length;i++){
        if(array[i] in obj){
            obj[array[i]]++;
        }else{
            obj[array[i]]=1;
        }
    }
    for(attr in obj){
        if(obj[attr] == 1){
            arr.push(attr);
        }
    }
    return arr;
}

// 方法三、位运算
function FindNumsAppearOnce(array){
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    function findFirst1(num) {
        var index = 0;
        while (((num & 1) === 0) && (index < 64)) {
            num = num >> 1;
            index++;
        }
        return index;
    }
    function is1(num, index) {
        num = num >> index;
        return num & 1;
    }
    if (Array.isArray(array)) {
        if (array.length < 2) {
            return [];
        }
        var exclusive = 0;
        for (var i = 0; i < array.length; i++) {
            exclusive ^= array[i];
        }
        var indexOf1 = findFirst1(exclusive);
        var num1 = 0,
            num2 = 0;
        for (i = 0; i < array.length; i++) {
            if (is1(array[i], indexOf1)) {
                num1 ^= array[i];
            } else {
                num2 ^= array[i];
            }
        }
        return [num1, num2];
    }
}

// 四十一、和为S的连续正数序列 p282
// 输入一个整数 s，打印出所有和为 s 的连续正整数序列（至少含有两个数）。比如输入15，由于 1+2+3+4+5 = 4+5+6 =7+8 = 15,所以连续序列为 1-5,4-6,7-8.
function FindContinuousSequence(sum){
    var start = 1, // 相当于两个指针吧，小的为 1, 大的为2
        end = 2;
    var sumTemp = 0;
    var array = [1,2];
    var ans = [];
    if (sum < 3) return [];
    // Math.ceil() 返回大于或等于一个给定数字的最小整数。
    while (start <= Math.ceil(sum / 2)) {
        sumTemp = (start + end) * (end - start + 1) / 2;
        // 实际值 等于 目标值 时
        if(sumTemp == sum) {
            ans.push(array.concat());
            array.shift();
            start++;
            end++;
            array.push(end);
            // 实际值 大于 目标值 时，小指针增加
        }else if(sumTemp > sum) {
            array.shift();
            start++;
            // 实际值 小于 目标值时，大指针增加
        } else {
            end++;
            array.push(end);
        }
    }
    return ans;
}

// 四十二、和为S的两个数字 p280
// 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。

// 和上面一样，用两个指针
function FindNumbersWithSum(array, sum){
    if(array.length<2) return [];
    var result=[];
    var start=0,end=array.length-1;
    while(start<end){
        var s=array[start]+array[end];
        if(s<sum){
            start++
        }else if(s>sum){
            end--;
        }else{
            return [array[start],array[end]]
        }
    }
    return [];
}

// 四十三、翻转单词顺序列 p284
// 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字幕一样处理。例如输入字符串“ I am a student”,输出为 “student a am I”
function ReverseSentence(str){
    return str.split(" ").reverse().join(" ");
}
// 第一步是按照空格分开，第二步是reverse()是将倒数第一个变成第一个，第三步是将数组转换为字符串

// 四十四、左旋转字符串 p286
// 对于一个给定的字符序列S，请你把其循环左移K位后的序列输出。例如，字符序列S=”abcXYZdef”,要求输出循环左移3位后的结果，即“XYZdefabc”。
function LeftRotateString(str, n){
    if(!str) return '';
    var len = str.length;
    return str.concat(str).slice(n, n + len);
}

// 四十五、扑克牌顺子 p298
//从扑克牌中随机抽 5 张牌，判断是不是一个顺子，即这 5 张牌是不是连续的，2-10为数字本身，大小王可以看成任何数字,并且A看作1,J为11,Q为12,K为13。

function IsContinuous(numbers){
    //思路：首先先排序，然后统计大小王个数，然后遍历，看缺多少个数才能连续，如果超过大小王个数则失败。
    var num_zero = 0;  //王的数量
    var lack_number = 0;
    var sort_number = numbers.sort(function(a,b){
            return a-b;
    });
    if(!numbers || numbers.length < 1){
        return false;
    }
  for (var i = 0; i < numbers.length-1; i++) {
            // 计算癞子数量
            if (numbers[i] == 0) {
                num_zero++;
                continue;
            }
            // 对子，直接返回
            if (numbers[i] == numbers[i + 1]) {
                return false;
            }
            lack_number += numbers[i + 1] - numbers[i] - 1;
        }
    return lack_number<=num_zero;
}
// 四十六、圆圈中最后剩下的数 p300
// 0,1,2,3,4,5...n-1这n个数字排成一个圆圈，从数字 0 开始，每次从这个圆圈里删除第 m 个数字。求出这个圆圈里剩下的最后一个数字。

// 环形链表法：
function LastRemaining_Solution(n, m){
  if(n<1||m<1) return -1;
  var array = [];
  var i = -1,step = 0, count = n;
  while(count>0){   //跳出循环时将最后一个元素也设置为了-1
      i++;          //指向上一个被删除对象的下一个元素。
      if(i>=n) i=0;  //模拟环。
      if(array[i] == -1) continue; //跳过被删除的对象。
      step++;                     //记录已走过的。
      if(step==m){               //找到待删除的对象。
          array[i]=-1;
          step = 0;
          count--;
      }
  }
  return i;//返回跳出循环时的i,即最后一个被设置为-1的元素
}

// 递归法：
function LastRemaining_Solution(n, m){
    if(n == 0){return -1;}
    if(n == 1){return 0;
    }else{
        return (LastRemaining_Solution(n - 1, m) + m) % n;//p302
    }
}

// 四十七、求1+2+3+...+n p307
// 求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

// 方法一：
function Sum_Solution(n){
    return (1+n)*n/2;
}

// 方法二：
function Sum_Solution(n){
    var res = n;
    (n>0)&&(res += Sum_Solution(n-1));
    return res;
}

// 方法三：
function Sum_Solution(n){
    return Math.ceil((Math.pow(n,2) + n)/2);
}

// 四十八、不用加减乘除做加法 p310
// 写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号。

function Add(num1, num2){
  while(num2 != 0){
    var temp = num1 ^ num2; // 不考虑进位对每一位都相加 (^ 出现 1 时返回 1)
    var num2=(num1 & num2)<<1;// 先做位与运算，再向左移一位（& 都为 1 时返回 1）
    num1 = temp; // 重复前两步
  }
  return num1;
}

// 四十九、把字符串转换成整数 p318
// 将一个字符串转换成一个整数(实现Integer.valueOf(string)的功能，但是string不符合数字要求时返回0)，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0。
// 这题对 JS 来说是无效的

function StrToInt(str){
  return Number(str) ? parseInt(str) : 0;
}

// 五十、数组中重复的数字 p39
// 在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中任意一个重复的数字。 例如，如果输入长度为7的数组{2,3,1,0,2,5,3}，那么对应的输出是第一个重复的数字2。
function duplicate(numbers, duplication){
  //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
  //函数返回True/False
  var length = numbers.length;
  var obj={}; // 哈希表
  for(var i=0;i<length;i++){
    if(numbers[i] in obj){
        duplication[0]=numbers[i];
        return true;
    }else{
        obj[numbers[i]]=1;
    }
  }
  return false;
}
//五十一、构建乘积数组 p312
// 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。

function multiply(array){
        if(!array||array.length<=0) return;
    var len=array.length;
    var b=[],c=[],d=[];
    b[0]=1;
    //计算下三角连乘
    for(i=1;i<len;i++){
        b[i]=b[i-1]*array[i-1];
    }
    var temp=1;
    //计算上三角
    for(var i=len-2;i>=0;i--){
        temp*=array[i+1];
        b[i]*=temp;
    }
    return b;
}

// 五十二、正则表达式匹配 p124
// 请实现一个函数用来匹配包括'.'和'*'的正则表达式。模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。 在本题中，匹配是指字符串的所有字符匹配整个模式。例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配

//s, pattern都是字符串
// 方法一
function match(s, pattern){
  var reg = new RegExp('^'+pattern +'$','g');
  return reg.test(s);
}

/*
    解这题需要把题意仔细研究清楚，反正我试了好多次才明白的。
    首先，考虑特殊情况：
         1>两个字符串都为空，返回true
         2>当第一个字符串不空，而第二个字符串空了，返回false（因为这样，就无法
            匹配成功了,而如果第一个字符串空了，第二个字符串非空，还是可能匹配成
            功的，比如第二个字符串是“a*a*a*a*”,由于‘*’之前的元素可以出现0次，
            所以有可能匹配成功）
    之后就开始匹配第一个字符，这里有两种可能：匹配成功或匹配失败。但考虑到pattern
    下一个字符可能是‘*’， 这里我们分两种情况讨论：pattern下一个字符为‘*’或
    不为‘*’：
          1>pattern下一个字符不为‘*’：这种情况比较简单，直接匹配当前字符。如果
            匹配成功，继续匹配下一个；如果匹配失败，直接返回false。注意这里的
            “匹配成功”，除了两个字符相同的情况外，还有一种情况，就是pattern的
            当前字符为‘.’,同时str的当前字符不为‘\0’。
          2>pattern下一个字符为‘*’时，稍微复杂一些，因为‘*’可以代表0个或多个。
            这里把这些情况都考虑到：
               a>当‘*’匹配0个字符时，str当前字符不变，pattern当前字符后移两位，
                跳过这个‘*’符号；
               b>当‘*’匹配1个或多个时，str当前字符移向下一个，pattern当前字符
                不变。（这里匹配1个或多个可以看成一种情况，因为：当匹配一个时，
                由于str移到了下一个字符，而pattern字符不变，就回到了上边的情况a；
                当匹配多于一个字符时，相当于从str的下一个字符继续开始匹配）
    之后再写代码就很简单了。
*/

// 方法二
function match(s, pattern){
    if(s != '' && pattern == ''){return false}
    if(s == '' && pattern == ''){return true}
    var sIndex =0;
    var pIndex =0;
    return match_di(s,pattern,0,0)

}
function match_di(s,p,si,pi){
    if(si == s.length && p.length == pi){return true}
    if(si != s.length && p.length == pi ){return false};
    //第一个字符匹配，第二个字符时“*”
    if(pi+1 < p.length && p[pi +1 ] == "*"){
        if( si != s.length && ( s[si] == p[pi] || p[pi] == '.')){
       return match_di(s,p,si,pi+2) || match_di(s,p,si+1,pi+2) || match_di(s,p,si+1,pi)
       }else{
           return match_di(s,p,si,pi+2)
       }

    }else if(s!=s.length && pi != p.length && ( s[si] == p[pi] || p[pi] == '.')){
        return match_di(s,p,si+1,pi+1)
    }

    return false
}

// 五十三、表示数值的字符串 p127
// 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。
// 方法一：
function isNumeric(s){
  return !isNaN(Number(s));
}

// 方法二：
function isNumeric(s){
  return s.match(/[\+\-]?[0-9]*(\.[0-9]*)?([eE][\+\-]?\d+)?/g)[0] === s;
}

// 五十四 字符流中第一个不重复的字符  ???
// 请实现一个函数用来找出字符流中第一个只出现一次的字符。例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。如果当前字符流没有存在出现一次的字符，返回#字符。

var map = {};

function Init(){
    map = {};
}

function Insert(ch){
    if (!map[ch]) {
        map[ch] = 1;
    } else {
        map[ch] ++;
    }
}

function FirstAppearingOnce(){
    for (var ch in map) {
        if (map.hasOwnProperty(ch)){
            if (map[ch] === 1) {
                return ch;
            }
        }
    }
    return '#';
}

// 五十五、链表中环的入口结点 p139
// 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。

//1、第一步确定有没有环：定义两个指针同时出发，一个快一个慢，走的快的追上了走得慢的，就代表里面有环，如果快的到来链尾都没追上，就没环；
// 2、第二步找入口：如果链表中的环有 n 个节点，那么第一个指针就比第二个指针先出发 n,相同的速度移动，指针2在入口时，指针1已结绕着入口一圈，也停在了入口

function EntryNodeOfLoop(pHead){
    if(pHead == null){return 1;}
    if(pHead.next == null){return null;}
    var fast = pHead;
    var slow = pHead;
    //找到一快一满指针相遇处的节点，相遇的节点一定是在环中
    while(slow != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
        if(fast == slow) break;
    }

    var p1 = slow;
    var p2 = pHead;
    // 移动p1，p2
    while(p1 != p2){
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
}

// 五十六、删除链表中重复的结点  ？？？
// 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5

function deleteDuplication(pHead){
    var newHead = new ListNode('head');
    newHead.next = pHead;
    var pHead = newHead;
    var qHead = pHead.next;
    while(qHead) {
        while((qHead.next!=null) && (qHead.val == qHead.next.val)) {
            qHead = qHead.next;
        }
        //没移动
        if(pHead.next == qHead){
            pHead = qHead;
            qHead = qHead.next;
        }
        //移动了
        else{
            qHead = qHead.next;
            pHead.next = qHead;
        }
    }
    return newHead.next;
}

// 五十七、二叉树的下一个结点 p65
// 给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。

function GetNext(pNode){
    if(!pNode){return null;}    // 空指针
    var p = null;
    if(pNode.right){            // 存在右子树
        p = pNode.right;
        while(p.left){
            p = p.left;
        }
    }else{                      // 不存在右子树
        p = pNode.next;
        if(pNode.next && pNode.next.right == pNode){
            while(p.next && p.next.right == p){
                p = p.next;
            }
            if(p.next == null){
                p =  null;
            }else{
                p = p.next;
            }
        }
    }
    return p;
}

// 五十八、对称的二叉树 p159
// 请实现一个函数，用来判断一棵二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。

/*思路：首先根节点以及其左右子树，左子树的左子树和右子树的右子树相同
* 左子树的右子树和右子树的左子树相同即可，采用递归
* 非递归也可，采用栈或队列存取各级子树根节点
*/

function isSymmetrical(pRoot){
  if(pRoot==null){
      return true
  }
  return judge(pRoot.left,pRoot.right)
}

// 竟然还有 .left 和 .right 这种方法
function judge(left,right){
  if(left==null){return right==null}
  if(right==null){return false}
  if(left.val!=right.val){return false}
  return judge(left.left,right.right)&&judge(left.right,right.left)
}

// 五十九、按之字形顺序打印二叉树 p176
// 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。

/**
 * 大家的实现很多都是将每层的数据存进ArrayList中，偶数层时进行reverse操作，
 * 在海量数据时，这样效率太低了。
 * （我有一次面试，算法考的就是之字形打印二叉树，用了reverse，
 * 直接被鄙视了，面试官说海量数据时效率根本就不行。）
 *
 * 下面的实现：不必将每层的数据存进ArrayList中，偶数层时进行reverse操作，直接按打印顺序存入
 * 思路：
 *     1)可用做队列,实现树的层次遍历
 *     2)可双向遍历,奇数层时从前向后遍历，偶数层时从后向前遍历
 */

 function Print(pRoot){
     var lists=new Array();//存放结果
     if(pRoot==null){
         return lists;
     }

     var stack1=[];//存放奇数行
     var stack2=[];//存放偶数行
     stack1.push(pRoot);
     var i=1;//层数
     while(stack1.length!=0 || stack2.length!=0){
         var list=new Array();
         if((i&1)==1){//当是奇数行的时候
             while(stack1.length!=0){
             var temp=stack1[stack1.length-1];//用一数组记录下，一直是从后往前push的
             list.push(temp.val);
             stack1.pop();
             if(temp.left!=null){
                //把下一行（偶数行）的数保存在stack2中，因为是从右往左，所以在栈中先添加左子节点
                 stack2.push(temp.left);
             }
             if(temp.right!=null){
                 stack2.push(temp.right);
             }
         }
         }else{//当是偶数行的时候
             while(stack2.length!=0){
                 var temp=stack2[stack2.length-1];
                 list.push(temp.val);
                 stack2.pop();
                 //因为奇数行是从左往右打印，所以在栈中先添加右子节点再添加左子节点
                 if(temp.right!=null){
                     stack1.push(temp.right);
                 }
                 if(temp.left!=null){
                     stack1.push(temp.left);
                 }
             }
         }
         i++;
         lists.push(list);
     }
     return lists;
 }

 // 六十、把二叉树打印成多行 p174
// 从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。
 function Print(pRoot){
    var queue = [],
        resultArr = [],
        itemArr = [];

    if (pRoot == null) {
        return resultArr;
    }

    queue.push(pRoot);
    var nextLevelLen = 0,
        waitPrint = 1;

    while (queue.length != 0) {
        var inode = queue[0];
        itemArr.push(inode.val);

        if (inode.left != null) {
            queue.push(inode.left);
            nextLevelLen ++;
        }
        if (inode.right != null) {
            queue.push(inode.right);
            nextLevelLen ++;
        }

        queue.shift();
        waitPrint --;
        if (waitPrint == 0) {
            resultArr.push(itemArr);
            itemArr = [];
            waitPrint = nextLevelLen; // 下一行待打印的个数初始化为所有的结点个数
            nextLevelLen = 0; // 重新统计在再一行应该有的结点个数
        }
    }
    return resultArr;
  }

// 六十一、序列化二叉树 p194
// 请实现两个函数，分别用来序列化和反序列化二叉树

function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

var arr = [];
function Serialize(pRoot){
    if(pRoot==null){
        arr.push('a');
    }else{
        arr.push(pRoot.val);
        Serialize(pRoot.left);
        Serialize(pRoot.right);
    }
}

function Deserialize(s){
    var node = null;
    if(arr.length<1){
        return null;
    }
    var number = arr.shift();
    if(typeof number == 'number'){
        node = new TreeNode(number);
        node.left = Deserialize(arr);
        node.right = Deserialize(arr);
    }
    return node;
}

// 六十二、二叉搜索树的第k个结点  p269
// 给定一棵二叉搜索树，请找出其中的第k小的结点。例如，（5，3，7，2，4，6，8）中，按结点数值大小顺序第三小结点的值为4。

// 由于题目中的二叉树是给定的，所以本题考查的就是 中序遍历

function KthNode(pRoot, k){
  if(k<=0){return null;}
  var count=0; //计数器
  function Knodes(pRoot, k){
      if(pRoot!==null){//中序遍历寻找第k个
        var node = Knodes(pRoot.left, k);
        if(node!==null){return node;}
        count++;
        if(count==k){return pRoot;}

        node = Knodes(pRoot.right, k);
        if(node!==null){return node;}
      }
      return null;
  }
  return Knodes(pRoot,k);
}

// 六十三、数据流中的中位数 p214
// 如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。我们使用Insert()方法读取数据流，使用GetMedian()方法获取当前读取数据的中位数。
// 最大堆和最小堆
var arr = [];
function Insert(num){
    arr.push(num);
    return arr;
}

function GetMedian(){
    arr.sort();
    let len = arr.length;
    let mid = parseInt(len/2);
    for(let i = 0; i < len; i++){
        if(len % 2 == 0){
            let node1 = arr[mid];
            let node2 = arr[mid-1];
            return (node1+node2)/2;
        }else{
            return arr[mid];
        }
    }
}

// 六十四、滑动窗口的最大值 ？？？
// 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}； 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}， {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。

function maxInWindows(num, size){
    if(num.length===0 || size===0){return [];}
    var result=[];
    var count=num.length-size;
    for(var i=0;i<=count;i++){
        var temp=num.slice(i,i+size);
        result.push(Math.max.apply(this,temp));
    }
    return result;
}

// 六十五、矩阵中的路径 p89
// 请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。如果一条路径经过了矩阵中的某一个格子，则之后不能再次进入这个格子。 例如 a b c e s f c s a d e e 这样的3 X 4 矩阵中包含一条字符串"bcced"的路径，但是矩阵中不包含"abcb"路径，因为字符串的第一个字符b占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。

// 这是一个可以用回朔法解决的典型题。首先，在矩阵中任选一个格子作为路径的起点。如果路径上的第i个字符不是ch，那么这个格子不可能处在路径上的
// 第i个位置。如果路径上的第i个字符正好是ch，那么往相邻的格子寻找路径上的第i+1个字符。除在矩阵边界上的格子之外，其他格子都有4个相邻的格子。
// 重复这个过程直到路径上的所有字符都在矩阵中找到相应的位置。
// 由于回朔法的递归特性，路径可以被开成一个栈。当在矩阵中定位了路径中前n个字符的位置之后，在与第n个字符对应的格子的周围都没有找到第n+1个字符，这个时候只要在路径上回到第n-1个字符，重新定位第n个字符。
// 由于路径不能重复进入矩阵的格子，还需要定义和字符矩阵大小一样的布尔值矩阵，用来标识路径是否已经进入每个格子。 当矩阵中坐标为（row,col）的格子和路径字符串中相应的字符一样时，从4个相邻的格子(row,col-1),(row-1,col),(row,col+1)以及(row+1,col)中去定位路径字符串中下一个字符
// 如果4个相邻的格子都没有匹配字符串中下一个的字符，表明当前路径字符串中字符在矩阵中的定位不正确，我们需要回到前一个，然后重新定位。
// 一直重复这个过程，直到路径字符串上所有字符都在矩阵中找到合适的位置
function hasPath(matrix, rows, cols, path){
    if (path.length === 0) {
        return true;
    }
    if (rows * cols < path.length) {
        return false;
    }
    let status = [];
    // 初始化status
    for (let i = 0; i < rows; i++) {
        status.push([]);
        for(let j = 0; j < cols; j++) {
            status[i][j] = false;
        }
    }
    //找到第一个符合的path的
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i*cols+j] === path[0]) {
                if (path.length === 1) {
                    return true;
                }
                status[i][j] = true;
                if (find(matrix, rows, cols, i, j, path.slice(1), status)) {
                    return true;
                }
                status[i][j] = false;
            }
        }
    }
    return false;
}
function find(matrix,rows,cols,row,col,path,status){
    if(row > 0 && matrix[(row-1)*cols + col] === path[0] && status[row-1][col] === false){
        if(path.length === 1){
            return true;
        }
        status[row-1][col] = true;
        if(find(matrix,rows,cols,row-1,col,path.slice(1),status)){
            return true;
        }
        status[row-1][col] = false;
    }
    if(row < rows-1 && matrix[(row+1)*cols + col] === path[0] && status[row+1][col] === false){
        if(path.length === 1){
            return true;
        }
        status[row+1][col] = true;
        if(find(matrix,rows,cols,row+1,col,path.slice(1),status)){
            return true;
        }
        status[row+1][col] = false;
    }
    if(col > 0 && matrix[row*cols + col -1] === path[0] && status[row][col-1] === false){
        if(path.length === 1){
            return true;
        }
        status[row][col-1] = true;
        if(find(matrix,rows,cols,row,col-1,path.slice(1),status)){
            return true;
        }
        status[row][col-1] = false;
    }
    if(col < cols-1 && matrix[row*cols + col +1] === path[0] && status[row][col+1] === false){
        if(path.length === 1){
            return true;
        }
        status[row][col+1] = true;
        if(find(matrix,rows,cols,row,col+1,path.slice(1),status)){
            return true;
        }
        status[row][col+1] = false;
    }
    return false;
}

// 六十六、机器人的运动范围 p92
// 地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。 例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？

// 核心思路：
// 1.从(0,0)开始走，每成功走一步标记当前位置为true,然后从当前位置往四个方向探索，
// 返回1 + 4 个方向的探索值之和。
// 2.探索时，判断当前节点是否可达的标准为：
// 1）当前节点在矩阵内；
// 2）当前节点未被访问过；
// 3）当前节点满足limit限制。

function movingCount(threshold, rows, cols) {
      var visited = [];
      for (var i = 0; i < rows; i++) {
        visited.push([]);
        for (var j = 0; j < cols; j++) {
          visited[i][j] = false;
        }
      }
      return moveCount(threshold, rows, cols, 0, 0, visited);
    }

function moveCount(threshold, rows, cols, row, col, visited) {
      if (row < 0 || row == rows || col < 0 || col == cols || visited[row][col]) {
        return 0;
      }
      var sum = 0;
      var temp = row + "" + col;
      for (var i = 0; i < temp.length; i++) {
        sum += temp.charAt(i) / 1;
      }
      if (sum > threshold) {
        return 0
      }
      visited[row][col] = true;
      return 1 + moveCount(threshold, rows, cols, row, col - 1, visited) +
        moveCount(threshold, rows, cols, row, col + 1, visited) +
        moveCount(threshold, rows, cols, row - 1, col, visited) +
        moveCount(threshold, rows, cols, row + 1, col, visited);
    }
