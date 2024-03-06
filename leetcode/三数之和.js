const a = [-1,0,1,2,-1,-4]
/**
 * 
 * @param {三数之和} nums 
 * @returns 
 * 重点思路：固定某一项 再利用双指针的循环处理判断 nums[i] + nums[L] + nums[R] = 0
 * 先处理边界问题：如果传入的数组长度小于3 则返回[]
 * 对其进行生序的排序
 * 遍历数组： 如果nums[i] > 0 返回[]
 * 如果 当前项和前一项相等 则跳过执行 （去重操作）
 * 固定项num[i]  定义左指针 L = i + 1 右指针 R = nums.length - 1
 * while循环 L < R 的时候判断 三数之和 是否等于 0
 * 如果等于 0 则在数组里添加对应的数据 且 左指针向右移动 L ++ 右指针向左移动 R--
 * 且判断去重 nums[L] == nums[L + 1]的时候直接将左指针+1 跳过
 * 同理 nums[R] == nums[R - 1]的时候将右指针 - 1跳过
 * 
 * 如果三数之和 < 0 则 L ++
 * 如果三数之和 > 0 则 R--
 * 
 * 如果 L > R 则遍历结束后 返回 新数组
 * 
 */

var threeSum = function(nums) {
    let ans = []
    let len = nums.length
    if(len < 3) return ans
    nums.sort((a,b) => a - b)
    console.log(nums,'n')
    for(let i = 0; i< len;i++){
        if(nums[i] > 0) break
        if(i > 0 && nums[i] == nums[i - 1]) continue
        let L = i + 1
        let R = len - 1
        while (L < R) {
            const sum = nums[i] + nums[L] + nums[R]
            if(sum == 0) {
                ans.push([nums[i],nums[L], nums[R]])
                while(L < R && nums[L] == nums[L + 1]) { L++ }
                while(L < R && nums[R] == nums[R - 1]) { R-- }
                L ++
                R -- 
            }
            else if(sum < 0) {
                L ++
            }else if(sum > 0) {
                R --
            }
        }
    }
    return ans
}

console.log(threeSum(a))