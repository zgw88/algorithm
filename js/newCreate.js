// 手写create
// 将传入的对象作为原型

function newObj (obj) {
    function F (){}
    F.prototype = obj
    return new F()
}