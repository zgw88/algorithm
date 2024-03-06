// 实现 f(N)=f(N-1)+f(N-2)

// 方法1：
function F(n){
    if(n === 0 || n === 1){
        return 1
    }
    return F(n-1) + F(n-2)
}
// F(5)
// console.time('F')
// console.log(F(38),'11') 461.874ms
// console.timeEnd('F')

// 方法2：
function FQ(n){
    let arr = []
    let val = null
    function _F(n){
        if(n === 0 || n === 1){
            return 1
        }
    }

    if(arr[n]){
        console.log(arr[n],'26')
        return arr[n]
    }else {
        val = _F(n-1) + _F(n-2)
        arr[n] = val
        return val
    }
    // return _F(n)
}

// const res = FQ(5)
// console.time('F')
// console.log(res,'35')
// console.timeEnd('F')

//
// function fn(n) {
//     var dp = new Array(n + 1);
//     dp[0] = dp[1] = 1;
//     for (let i = 2, length = dp.length; i < length; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2];
//     }
//     return dp[n];
// }

function F3(n){
    let db = new Array(n + 1)
    db[0] = db[1] = 1
    for (let i = 2,len = db.length;i<len;i++){
        db[i] = db[i - 1] + db[i - 2]
        console.log(db[i],'ii')
    }
    return db[n]
}

const res = F3(10)
console.time('F')
console.log(res,'35')
console.timeEnd('F')
