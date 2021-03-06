/**
 * 逆波兰表达式求值
 * 
 * 题意：
 *  根据 逆波兰表示法，求表达式的值。
 *  有效的运算符包括 + ,  - ,  * ,  / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
 * 
 * 
 * 说明：
 *  整数除法只保留整数部分。 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 * 
 * 示例 1：
 *  输入: ["2", "1", "+", "3", "*"]
 *  输出: 9
 *  解释: 该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
 * 
 * 示例 2：
 *  输入: ["4", "13", "5", "/", "+"]
 *  输出: 6
 *  解释: 该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
 * 
 * 示例 3：
 *  输入: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
 *  输出: 22
 *  解释:该算式转化为常见的中缀算术表达式为：
 *      ((10 * (6 / ((9 + 3) * -11))) + 17) + 5 
 * 
 * 逆波兰表达式：是一种后缀表达式，所谓后缀就是指算符写在后面。
 * 平常使用的算式则是一种中缀表达式，如 ( 1 + 2 ) * ( 3 + 4 ) 。
 * 该算式的逆波兰表达式写法为 ( ( 1 2 + ) ( 3 4 + ) * ) 。
 * 逆波兰表达式主要有以下两个优点：
 *  去掉括号后表达式无歧义，上式即便写成 1 2 + 3 4 + * 也可以依据次序计算出正确结果。
 *  适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中。
 * 
 * 
 * 思路：
 *  在上一篇文章中1047.删除字符串中的所有相邻重复项 提到了 递归就是用栈来实现的。
 *  所以栈与递归之间在某种程度上是可以转换的！ 这一点我们在后续讲解二叉树的时候，会更详细的讲解到。
 *  那么来看一下本题，其实逆波兰表达式相当于是二叉树中的后序遍历。 大家可以把运算符作为中间节点，按照后序遍历的规则画出一个二叉树。
 *  但我们没有必要从二叉树的角度去解决这个问题，只要知道逆波兰表达式是用后续遍历的方式把二叉树序列化了，就可以了。
 *  在进一步看，本题中每一个子表达式要得出一个结果，然后拿这个结果再进行运算，那么这岂不就是一个相邻字符串消除的过程，和1047.删除字符串中的所有相邻重复项 中的对对碰游戏是不是就非常像了。
 *  相信看完动画大家应该知道，这和1047. 删除字符串中的所有相邻重复项 (opens new window)是差不错的，只不过本题不要相邻元素做消除了，而是做运算！
 */

const evalRPN = function(tokens) {
    // 运算符计算
    const s = new Map([
        ["+", (a, b) => a * 1  + b * 1],
        ["-", (a, b) => b - a],
        ["*", (a, b) => b * a],
        ["/", (a, b) => (b / a) | 0]
    ]);

    const stack = [];

    for (const i of tokens) {
        if (!s.has(i)) {
            stack.push(i);
            continue;
        }

        stack.push(s.get(i)(stack.pop(), stack.pop()))
    }

    return stack.pop();
};



// 测试
// 9
const arr1 = ["2", "1", "+", "3", "*"]
// 6
const arr2 = ["4", "13", "5", "/", "+"]
// 22
const arr3 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]

console.log(evalRPN(arr1))
console.log(evalRPN(arr2))
console.log(evalRPN(arr3))