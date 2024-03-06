// /**
//  * 两数之和（Two Sum）是一个经典的算法题，要求在给定的整数数组中找到两个数，使它们的和等于目标值。以下是一种常见的解法，使用哈希表来记录已经遍历过的数字及其索引：

// ```javascript
// function twoSum(nums, target) {
//   const map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
    
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
    
//     map.set(nums[i], i);
//   }

//   return [];
// }
// ```

// 上述代码使用了一个哈希表 `map` 来存储已经遍历过的数字及其对应的索引。在遍历数组时，计算当前数字与目标值的差值 `complement`。如果 `complement` 在哈希表中存在，则说明之前已经遇到过与当前数字配对的数字，直接返回两个数字的索引；否则，将当前数字及其索引存入哈希表中以备后续查找。

// 示例用法：
// ```javascript
// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target)); // 输出 [, 1]
// ```

// 注意：上述解法假设输入数组中只有一组满足条件的结果，并且每个元素最多只能使用一次。如果题目要求不同，请根据具体需求进行相应的修改。
//  */

// // 是的，除了使用哈希表的解法外，还可以考虑使用双指针来解决两数之和的问题。这种方法要求输入数组必须是有序的。

// // 以下是基于双指针的解法：

// ```javascript
// function twoSum(nums, target) {
//   let left = ;
//   let right = nums.length - ;

//   while (left < right) {
//     const sum = nums[left] + nums[right];
    
//     if (sum === target) {
//       return [left, right];
//     } else if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }

//   return [];
// }
// ```

// // 上述代码中，我们初始化左指针 `left` 指向数组开头，右指针 `right` 指向数组末尾。然后根据两个指针所指元素的和与目标值比较的结果，逐步移动左右指针。如果和等于目标值，则返回两个指针的索引；如果和小于目标值，则移动左指针；如果和大于目标值，则移动右指针。重复此过程直到找到满足条件的结果或左右指针相遇。

// // 需要注意的是，这种方法要求输入数组是有序的，否则可能得不到正确的结果。

// // 示例用法：
// ```javascript
// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target)); // 输出 [, 1]
// ```

// // 总结：以上介绍了两种常见的解法，一种是使用哈希表，另一种是使用双指针。具体选择哪种方法取决于题目要求和输入数据的特点。

const arr = [1,2,1,2,3,2,6,7,8,9]
const target = 3

// var twoSum = function(nums, target) {
//     let map = new Map()
//     for(let i =0 ;i<nums.length;i++){
//         const num = target - nums[i]
//         if(map.has(num)){
//             return [map.get(num), i]
//         }
//         map.set(nums[i], i)
//     }
//     return []
// };


var twoSum = function(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left < right) {
        const sum = nums[right] + nums[left]
        if(sum === target){
            return [left, right]
        }else if(sum < target){
            left ++
        }else{
            right --
        }
    }
    return []
};

function sums (arr,tar) {
    
}
console.log(twoSum(arr, target))


function twoSums(nums, target){
    let left = 0
    let right = nums.length - 1
    while(left < right){
        const sum = nums[left] + nums[right]
        if(sum === target){
            return [left,right]
        }else if(sum < target){
            left++
        }else{
            right --
        }
    }
    return []
}

function twoSumMap(nums, target){
    const map = new Map()
    for(let i = 0;i< nums.length; i++){
        const tempNum = target - nums[i]
        if(map.has(tempNum)){
            return map.get(nums[i],i)
        }
        map.set(nums[i], i)
    }
    return []
}

