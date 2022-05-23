/**
 * 反转字符串
 * 
 * 题意：
 *  编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
 *  不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 $O(1)$ 的额外空间解决这一问题。
 *  你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。
 * 
 * 示例 1：
 *  输入：["h","e","l","l","o"]
 *  输出：["o","l","l","e","h"]
 * 
 * 示例 2：
 *  输入：["H","a","n","n","a","h"]
 *  输出：["h","a","n","n","a","H"]
 * 
 * 
 * 思路:
 *  对于字符串，我们定义两个指针（也可以说是索引下标），一个从字符串前面，一个从字符串后面，两个指针同时向中间移动，并交换元素。
 */

const reverseString = function(s) {
    let l = -1
    let r = s.length;

    while(++l < --r) {
        [s[l], s[r]] = [s[r], s[l]];
    }

    return s;
};


// 测试
const str1 = ["h","e","l","l","o"]
const str2 = ["H","a","n","n","a","h"]
console.log(reverseString(str1))
console.log(reverseString(str2))