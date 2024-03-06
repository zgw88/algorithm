/**
 * 给定两个数组，编写一个函数来计算它们的交集
 * 
 * 思路：利用set的数据唯一性，将数组A set转化 new Set(A)
 * 然后遍历数组B，判断是否在A里存在，存在则添加到新的数组 C 中去
 * 返回新数组 C
 */

const num1 = [1,2,3,4]
const num2 = [1,4]

function findNums(nums1,nums2){
    if(nums1.length && nums2.length){
        let setNums1 = new Set(nums1)
        let newArr = []
        for(num of nums2){
            if(setNums1.has(num)){
                newArr.push(num)
            }
        }
        return newArr
    }
}


function findNums2(nums1,nums2) {
    return Array.from(new Set(nums1.filter(i => nums2.includes(i))))
}
console.log(findNums2(num1,num2))