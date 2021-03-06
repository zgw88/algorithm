// const curry = (fn, ...args) =>
//     // 函数的参数个数可以直接通过函数数的.length属性来访问
//     args.length >= fn.length // 这个判断很关键！！！
//         // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
//         ? fn(...args)
//         /**
//          * 传入的参数小于原始函数fn的参数个数时
//          * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
//          */
//         : (..._args) => curry(fn, ...args, ..._args);
//
// function add1(x, y, z) {
//     return x + y + z;
// }
// const add = curry(add1);
// console.log(add,'add')
// console.log(add(1, 2, 3));
// console.log(add(1)(2)(3));
// console.log(add(1, 2)(3));
// console.log(add(1)(2, 3));

const curry = (fn, ...args) =>{
    // console.log(fn,fn.length,'fn')
    console.log({...args},args.length, 'arg')
    return args.length >= fn.length ? fn(...args) : (..._args) =>{
        console.log({..._args},'26')
        return curry(fn,...args, ..._args)}
}



function add(x,y,z){
    return x + y + z
}

const myAdd = curry(add)

// console.log(myAdd(1)(2)(3))
console.log(myAdd(1,2,3))
