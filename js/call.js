// // call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法
// // https://github.com/mqyqingfeng/Blog/issues/11

// https://juejin.cn/post/6844903773979033614
//
let foo = {
    val: 1
}

function bar (name,age) { //可以被call 1
    console.log(this.val,name,age,'val 88')
    return{
        val: this.val,
        name: name,
        age: age
    }
}

// let bar2 = () =>{ // undefined
//     console.log(this.val,'val 12')
// }

// bar.call(foo)
// bar.call(bar2)

function mySymbol (obj){
    let unqiue = (Math.random() + new Date().getTime().toString(32)).slice(0,8)
    if(obj.hasOwnProperty(unqiue)){
        return mySymbol(unqiue)
    }else {
        return unqiue
    }
}

Function.prototype.call2 = function(obj){
    let context = obj || window
    context.fn = this;
    let args = []
    for (let i=1;i < arguments.length;i++){
        args.push('arguments + [' + i + ']')
    }

    let result = eval('context.fn('+ args +')')
    console.log(result,'20')
    delete context.fn;
    return result
}


Function.prototype.myCall = function (obj){
    let context = obj || window
    let fn = mySymbol(context)
    context[fn] = this
    let arg = [...arguments].slice(1)
    context[fn](...arg)
    delete context[fn]
}

Function.prototype.myApply = function (arr){
    let context = arr || window
    let fn = mySymbol(context)
    context[fn] = this
    let args = [...arguments].slice(1)
    context[fn](args)
    delete context[fn]
}

// 1、函数调用，改变this 2、返回一个绑定this的函数 3、接收多个参数 4、支持柯里化形式传参 fn(1)(2)
Function.prototype.myBind = function (context){
    let self = this

    let args = [...arguments].slice(1)
    return function (){
        let newArg = [...arguments]
        return self.apply(context,args.concat(newArg))
    }
}

bar.myCall(foo,'zhangsan',18)

bar.myApply(foo,['zhangsan','lisi'])




Function.prototype.call = function (context){
    let cont = context || window
    cont.fn = this
    let args = [...arguments].slice(1)
    cont[fn](...args)
    delete cont[fn]
}

Function.prototype.bind = function (content){
    let self = this
    let args = [...arguments].slice(1)
    return function (){
        return self.apply(content,args)
    }
}




Function.prototype.call = function (obj){
    let content = obj || window
    content[fn] = this
    let args = [...arguments].slice(1)
    content[fn](...args)
    delete content[fn]
}

Function.prototype.apply = function (obj){
    let content = obj || window
    content[fn] = this
    let args = [...arguments].slice(1)
    content[fn](args)
    delete content[fn]
}

Function.prototype.bind = function (obj){
    let self = this
    let args = [...arguments].slice(1)
    return function (){
        let newArgs = [...arguments].concat(args)
        self.apply(obj,newArgs)
    }
}
