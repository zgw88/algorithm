// https://github.com/mqyqingfeng/Blog/issues/42

// 柯里化是一种使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
let sub_curry = function (fn){
    const args = [].slice.call(arguments,1)
    return function (){
        const newArgs = args.concat([].slice.call(arguments))
        return fn.apply(this,newArgs)
    }
}

let curry = (fn,length) => {
    length = length || fn.length
    // console.log(length,'ll 14')
    let slice = Array.prototype.slice

    return function (){
        if(arguments.length < length){
            let combind = [fn].concat(slice.call(arguments))
            return curry(sub_curry.apply(this,combind),length - arguments.length)
        }else {
            return fn.apply(this,arguments)
        }
    }
}

function add(a,b,c){
    return a + b + c
}

const curry3 = (fn, ...args) =>
    args.length >= fn.length ? fn(...args) : (..._args) => curry3(fn, ...args, ..._args)

function add1(x,y,z){
    return x + y + z
}

const handleAdd = curry3(add1)

console.log(handleAdd,'handleAdd')
console.log(handleAdd(11)(2)(30))

// let addCurry = curry(add)
// const val = addCurry(4)(5)(6)
// console.log(val)
