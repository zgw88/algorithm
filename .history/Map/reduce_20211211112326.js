Array.prototype.reduce = Array.prototype.reduce || function reduce(func,initValue){
    let arr = this
    let base = typeof initValue === 'undefined' ? arr[0] : initValue
    let startPoint = typeof initValue === 'undefined' ? 1 : 0
    arr.slice(startPoint).forEach(function(val,index){
        base = func(base,val,index + startPoint,arr)
    })
    return base
}


// 手写reduce
// 1:理解reduce的具体用法解析reduce技术实现 reduce(fn,[arr]) fn里包含 prevValue,curValue,curIndex,callback,
// [].length > 0情况下 用[0]为默认起始值 
Array.prototype.reduce = function reduces(func,initvalue){

}