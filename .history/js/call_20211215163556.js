// call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法
// https://github.com/mqyqingfeng/Blog/issues/11

let foo = {
    val: 1
}

let bar = function () { //可以被call 1
    console.log(this.val,'val 88')
}

let bar2 = () =>{ // undefined
    console.log(this.val,'val 12')
}

bar.call(foo)
bar.call(bar2)

Function.prototype.call2 = function(context){
    context.fn = this;
    context.fn();
    delete context.fn;
}
