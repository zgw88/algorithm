// 输入: nums = [-1,0,3,5,9,12], target = 9
// 输出: 4
// 解释: 9 出现在 nums 中并且下标为 4

const nums = [-1,0,3,5,9,12]
const target = 12

const findNum = (nums,target) =>{
    let left = 0
    let right = nums.length - 1
    while (left <= right){
        let midNumIndex = Math.floor(left + (right - left) / 2)
        if(target === nums[midNumIndex]){
            return midNumIndex
        }else if(target > nums[midNumIndex]){
           left = midNumIndex + 1
        }else{
           right = midNumIndex - 1
        }
    }
    return  -1
}

const targetIndex = findNum(nums,target)
console.log(targetIndex,'targetIndex')
