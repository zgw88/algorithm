/**
 * 字符串反转
 */


const a = 'qwert'

// 双指针法 最左数跟最右数交换 直至最左指针大于最右指针 交换结束
function resveStr(a) {
    let s = a.split('')
    let len = a.length
    let left = 0
    let right = len - 1

    while(left <= right) {
        const temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left ++
        right --
    }
    return s.join('')
}


// 高级写法
function resverStrs(str) {
    let s = str.split('')
    let left = -1
    let right = str.length

    while(++left < right --) {
        [s[left], s[right]] = [s[right], s[left]]
    }

    return s.join('')
}

console.log(resverStrs(a))



/**
 * 反转2k字符串 即传入字符串 和 k值，反转2k 如果剩余字符少于 k 个，则将剩余字符全部反转,
 * 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样
 */

function resv2kStr(str, k) {
    const len = str.length;
    let resArr = str.split(""); 
    for(let i = 0; i < len; i += 2 * k) {  // 每隔 2k 个字符的前 k 个字符进行反转
        let l = i - 1, r = i + k > len ? len : i + k;
        while(++l < --r) [resArr[l], resArr[r]] = [resArr[r], resArr[l]];
    }
    return resArr.join("");
}

console.log(resv2kStr('qwertyuasdf',3))