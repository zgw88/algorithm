// 寄生式组合继承

function Parent(){
    name:'zhangsan';
    age: 18;
}

function Child(name){
    Parent.prototype.call(this)
}

let child = new Child('lisi')

console.log(child,'child')