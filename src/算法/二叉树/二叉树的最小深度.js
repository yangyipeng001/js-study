const BaseBinaryTreeExtendProps = require('./baseBinaryTreeExtendProps')
/**
 * 二叉树的最小深度
 * 
 * 题意：
 *  给定一个二叉树，找出其最小深度。
 *  最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 *  给定二叉树 [3,9,20,null,null,15,7],
 *  返回它的最小深度 2
 * 
 * 思路：
 *  看完了这篇104.二叉树的最大深度，再来看看如何求最小深度。
 *  直觉上好像和求最大深度差不多，其实还是差不少的。
 *  遍历顺序上依然是后序遍历（因为要比较递归返回之后的结果），但在处理中间节点的逻辑上，最大深度很容易理解，最小深度可有一个误区。
 *  这就重新审题了，题目中说的是：最小深度是从根节点到最近叶子节点的最短路径上的节点数量。，注意是叶子节点。
 *  什么是叶子节点，左右孩子都为空的节点才是叶子节点！
 * 
 * 解题：
 *  递归法
 *      1.确定递归函数的参数和返回值
 *          参数为要传入的二叉树根节点，返回的是int类型的深度。
 * 
 *      2.确定终止条件
 *          终止条件也是遇到空节点返回0，表示当前节点的高度为0。
 * 
 *      3.确定单层递归的逻辑
 *          这块和求最大深度可就不一样了，一些同学可能会写如下代码：
 *          如果这么求的话，没有左孩子的分支会算为最短深度。
 *          所以，如果左子树为空，右子树不为空，说明最小深度是 1 + 右子树的深度。
 *          反之，右子树为空，左子树不为空，最小深度是 1 + 左子树的深度。 最后如果左右子树都不为空，返回左右子树深度最小值 + 1 。
 *          遍历的顺序为后序（左右中），可以看出：求二叉树的最小深度和求二叉树的最大深度的差别主要在于处理左右孩子不为空的逻辑。
 * 
 *  迭代法
 *      相对于104.二叉树的最大深度，本题还可以使用层序遍历的方式来解决，思路是一样的。
 *      如果对层序遍历还不清楚的话，可以看这篇：二叉树：层序遍历登场！
 *      需要注意的是，只有当左右孩子都为空的时候，才说明遍历的最低点了。如果其中一个孩子为空则不是最低点
 */

// 递归法
const minDepth = function(root) {
    if (!root) return 0;

    // 到叶子节点 返回 1
    if (!root.left && !root.right) return 1;

    // 只有右节点时 递归右节点
    if (!root.left) return 1 + minDepth(root.right);

    // 只有左节点时 递归左节点
    if (!root.right) return 1 + minDepth(root.left);

    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

// 迭代法
const minDepth1 = function(root) {
    if (!root) return 0;
    const queue = [root];
    let dep = 0;

    while(queue.length) {
        let size = queue.length;
        dep++;

        while(size--) {
            const node = queue.shift();
            // 到第一个叶子节点 返回 当前深度 
            if (!node.left && !node.right) return dep;

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
};



// 测试
const arr = [3,9,20,null,null,15,7]
const baseBinaryTreeExtendProps = new BaseBinaryTreeExtendProps()
console.log(minDepth(baseBinaryTreeExtendProps.create(arr)))
console.log(minDepth1(baseBinaryTreeExtendProps.create(arr)))