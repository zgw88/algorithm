// // 寄生式组合继承
//
function Parent(name){
    // this.name = ['zhangsan','lisi']
    this.name = name
    this.likes = ['篮球','taiqiu']
}

Parent.prototype.getName = function (){
    console.log(this.name,'name 8')
    return this.name
}

function Child(name,age){
    // 借用构造函数
    Parent.call(this,name)
    this.age = age
}

let F = function (){}

F.prototype = Parent.prototype

Child.prototype = new F()
// Child.prototype = new Parent()

// Child.prototype.constructor = Child

let child1 = new Child('zhangsan',18)
child1.likes.push('yumaoqiu')

console.log(child1.name,'child 26')
console.log(child1,'child 27')


let child2 = new Child('lisi',16)
child2.likes.push('zhangsan')

console.log(child2.name,'child 24')
console.log(child2,'child 27')


// 原型式继承
function createObj(obj){
    function fn(){}
    fn.prototype = obj
    return new fn()
}


function prototype(child,parent){
    let prototype = createObj(parent)
    prototype.constructor = child
    child.prototype = prototype
}

let child1 =  prototype(child1,Parent)


