// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。
//
// 示例：
//
// 输入：s = 7, nums = [2,3,1,2,4,3] 输出：2 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

const s = 7, nums = [2,3,1,2,4,3]
let newArr = []
const getSolution = (nums,target) =>{
    const len = nums.length
    let l = r = sum = 0
    let res = len + 1 //最大子数
    while (r < len){
        sum += nums[r++]
        console.log(sum,r,l,'++')
        // 窗口滑动
        while (sum >= target){
            res = res < r - l ? res : r - l;
            sum -= nums[l++]
            // newArr.push(nums[l++])
            console.log(sum,res,r,l,'--')
        }
    }
    return res >len ? 0:res
}



// 双指针，
const solution = (nums,target) =>{
    const len = nums.length
    let l = r = sum = 0 // 定义双指针及叠加的值
    let res = len + 1 //最大子数

    while (r < len){
        sum += nums[r++]

        while(sum >= target){
            res = res < r - l ? res : r - l;
            sum-=nums[l++]
        }
    }
    return res > len ? 0 : res
}
const answerNum = solution(nums,s)
console.log(answerNum,newArr,'answerNum ')
