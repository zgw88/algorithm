var lengthOfLongestSubstring = function(s) {
    const hasc = new Set()
    const n = s.length
    let rk = -1, ans = 0
    for(let i=0;i<n; ++i){
        if(i != 0) {
            hasc.delete(s.charAt(i - 1))
        }
        console.log(hasc,i,'hh')
        while(rk +1 < n && !hasc.has(s.charAt(rk + 1))){
            hasc.add(s.charAt(rk + 1))
            ++rk
        }
        console.log(rk,'rk')
        ans = Math.max(ans, rk - i +1)
    }
    return ans
};

const a = 'qweraaaa'

const b = lengthOfLongestSubstring(a)

console.log(b)