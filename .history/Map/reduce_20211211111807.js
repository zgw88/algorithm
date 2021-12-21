Array.prototype.reduce = Array.prototype.reduce || function reduce(func,initValue){
    let arr = this
    let base = typeof initValue === 'undefined' ? arr[0] : initValue
    let startPoint = typeof initValue === 'undefined' ? 1 : 0
    arr.slice(startPoint).forEach(function(val,index){
        base = func(base,val,index + startPoint,arr)
    })
    return base
}


Array.prototype.reduce = function reduces(func,initvalue){
    
}