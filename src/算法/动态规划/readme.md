# 动态规划

## 分类
- 动规基础
    - 爬楼梯
    - 斐波那契
- 背包问题  
    - 01背包 - (有n种物品，每种物品只有一个)
    - 完全背包 - (有n种物品，每种物品有无限个)
    - 多重背包 - (有n种物品，每种物品的个数各不相同)
- 打家劫舍
- 股票问题
- 子序列问题


## 解题五部曲
- 确定dp数组（dp table）以及下标的含义
- 确定递推公式
- dp数组如何初始化
- 确定遍历顺序
- 举例推导dp数组（打印dp数组）


## 背包问题五部曲（解题步骤）
### 01背包
- dp[i][j]
    - [0, i] 物品任取放到容量为j的背包

- dp[i][j]
    - 不放物品i -> dp[i-1][j]
    - 放物品i -> dp[i-1][j-weight[i]] + value[i]
- 递推公式：dp[i][j] = max(dp[i-1][j], dp[i-1][j-weight[i]] + value[i])
- 初始化： 要根据物品来初始化，第一列和第一行不一定全是0和1，其他的无所谓什么值都行。
- 循环遍历
    - 如果dp是二维数组，两层的for循环的顺利无所谓
    - 其他维的数组就跟遍历的顺序有关系了

### 01背包（滚动数组篇）
- dp[j]: 容量为j的背包所承受的最大价值为dp[j]。
- 递推公式（就是把二维递推公式的i去掉）：dp[j] = max(dp[j], dp[j-weight[i]] + value[i])。
- 初始化(统一把dp数组初始化为0， 因为max比较，所以应该初始化为最小值)：
    - dp[0] = 0
- 遍历顺序：
    ```js
    // 物品 - 正序
    for (var i = 0; i < 物品数量; i++) {
        // 背包 - 倒叙
        for (var j = bigWeight; j >= weight[i]; j--) {}
    }
    ```

### 01背包问题
- 为什么二维dp数组历的时候不用倒序呢？
    - 因为对于二维dp，dp[i][j]都是通过上一层即dp[i - 1][j]计算而来，本层的dp[i][j]并不会被覆盖！
- 再来看看两个嵌套for循环的顺序，代码中是先遍历物品嵌套遍历背包容量，那可不可以先遍历背包容量嵌套遍历物品呢？
    - 不可以！因为一维dp的写法，背包容量一定是要倒序遍历（原因上面已经讲了），如果遍历背包容量放在上一层，那么每个dp[j]就只会放入一个物品，即：背包里只放入了一个物品。


