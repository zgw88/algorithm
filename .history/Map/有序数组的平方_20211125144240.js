// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
//
// 示例 1： 输入：nums = [-4,-1,0,3,10] 输出：[0,1,9,16,100] 解释：平方后，数组变为 [16,1,0,9,100]，排序后，数组变为 [0,1,9,16,100]
//
// 示例 2： 输入：nums = [-7,-3,2,3,11] 输出：[4,9,9,49,121]

// 数组其实是有序的， 只不过负数平方之后可能成为最大数了。
//
// 那么数组平方的最大值就在数组的两端，不是最左边就是最右边，不可能是中间。
//
// 此时可以考虑双指针法了，i指向起始位置，j指向终止位置。
//
// 定义一个新数组result，和A数组一样的大小，让k指向result数组终止位置。
//
// 如果A[i] * A[i] < A[j] * A[j] 那么result[k--] = A[j] * A[j]; 。
//
// 如果A[i] * A[i] >= A[j] * A[j] 那么result[k--] = A[i] * A[i]; 。

const nums = [-4,-1,0,3,10];
const sortSquares = (nums) =>{
    let res = []
    for (let i=0, j = nums.length - 1;i<= j;){
        const left = Math.abs(nums[i]);
        const right = Math.abs(nums[j]);
        if(left < right){
            res.unshift(right * right)
            j--
        }else{
            res.unshift(left * left)
            i++
        }
    }
    return res
}


// const sortSquers = (nums) =>{
//     let newArr = []
//     for (let i=0,j=nums.length - 1;i<j;i++){
//         let left = Math.abs(nums[i])
//         let right = Math.abs(nums[j])
//         if(left < right){
//             newArr.unshift(left * left)
//             i++
//         }else {
//             newArr.unshift(right * right)
//             j--
//         }
//     }
//     return newArr
// }

const newArr = sortSquares(nums)
console.log(newArr,'newArr 1')
