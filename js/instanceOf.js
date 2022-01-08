// instanceOf 原理实现
// 主要的实现原理就是只要右边变量的 prototype 在左边变量的原型链上即可。
// 因此，instanceof 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 prototype，
// 如果查找失败，则会返回 false，告诉我们左边变量并非是右边变量的实例。


function my_instanceOf(leftVal,rightVal){
    let rightPrototype = rightVal.prototype // 取右侧数据原型
    let left = leftVal.__proto__ // 左侧数据原型链
    while (true){
        if(left === null){ // 如果左侧数据原型链指向null 则false
            return false
        }
        if(left === rightPrototype){ //相等则代表是在原型链上
            return true
        }
        left = left.__proto__ //原型链向上查找的赋值
    }
}


function myInstanceOf (left,right){
    let rightVal = right.prototype
    let leftVal = left.__proto__
    while (true){
        if(leftVal === null){
            return false
        }
        if(leftVal === rightVal){
            return true
        }
        leftVal = leftVal.__proto__
    }
}
