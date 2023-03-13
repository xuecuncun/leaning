/**
 * 1、两数之和
题目描述
    给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
    你可以按任意顺序返回答案。

    示例 1：
    输入：nums = [2,7,11,15], target = 9
    输出：[0,1]
    解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
    示例 2：
    输入：nums = [3,2,4], target = 6
    输出：[1,2]
    示例 3：
    输入：nums = [3,3], target = 6
    输出：[0,1]
 */

var twoSum = function(nums, target) {
    //暴力算法---空间效率高，时间效率低
    const len = nums.length;
    for(let i=0; i<len; i++){
        for(let k=i+1; k<len; k++){
            if(nums[i]+nums[k] === target){
                return [i, k];
            }
        }
    }
};

var twoSum = function(nums, target) {
    // 巧用对象---时间效率高，空间效率低
    // 1、第一遍循环拿到两数之和的一个数
    // 2、用对象取值的方法代替第二遍循环，取另一个数（之后在每次循环结束会将数组的i项作为key，index作为value存在事先创建的对象中。i=0的时候不做比较）
    // 3、将目标值减去数组第i项作为key取对象中的值，如果是undefined说明符合条件的那一项还没存进对象
    // 4、将遍历数组的这一项作为对象的key，index作为value存在对象中（在后面存进来对于第一次循环一定不起作用，但是从第二次循环开始，对象取值的时候一定会取到之前存在对象里的键值对，在循环最后一次时，第3步取值的时候就会取除了最后一项没存进去的键值对，前面的都会取）
    const obj = {};
    const len = nums.length;
    for(let i=0; i<len; i++){
        let nextNum = target - nums[i];
        if(obj[nextNum] !== undefined){ //取对象里不存在的key时，返回undefined
            return [obj[nextNum], i]
        }
        obj[nums[i]] = i;
    }
};  