
// 用new Object() 的方式新建了一个对象 obj
// 取出第一个参数，就是我们要传入的构造函数。此外因为 shift 会修改原数组，所以 arguments 会被去除第一个参数
// 将 obj 的原型指向构造函数，这样 obj 就可以访问到构造函数原型中的属性
// 使用 apply，改变构造函数 this 的指向到新建的对象，这样 obj 就可以访问到构造函数中的属性
// 返回 obj

// function _new(){
//     let newObj = Object.create(null)
//     let args = [].slice.call(arguments)
//     let constructor = args.shift()
//     newObj.__proto__ = constructor.prototype
//     let res = constructor.apply(newObj,args)
//     return typeof  res === 'object' && res !== null ? res : newObj
// }

function __news(){
    let newObj = Object.create(null)
    let args = [].slice.call(arguments)
    let content = args.shift()
    newObj.__proto__ = content.prototype
    let res = content.apply(newObj,args)
    return res === 'object' && res !== null ? res : newObj
}


function newa () {
    /**
     * 1 创建一个对象 并取出arguments
     * 2 将此对象的__proto__指向构造函数的 prototype
     * 3 为此对象添加属性和方法
     * 4 返回对象
     */
    let obj = Object.create(null)
    let args = [].slice.call(arguments)
    let constructor = args.shift()
    obj.__proto__ = constructor.prototype
    let res = constructor.apply(obj, args)
    return res === 'object' && res !== null ? res : obj
}


function objectFactory() {
    let newObject = null;
    let constructor = Array.prototype.shift.call(arguments);
    let result = null;
    // 判断参数是否是一个函数
    if (typeof constructor !== "function") {
      console.error("type error");
      return;
    }
    // 新建一个空对象，对象的原型为构造函数的 prototype 对象
    newObject = Object.create(constructor.prototype);
    // 将 this 指向新建对象，并执行函数
    result = constructor.apply(newObject, arguments);
    // 判断返回对象
    let flag = result && (typeof result === "object" || typeof result === "function");
    // 判断返回结果
    return flag ? result : newObject;
  }
  // 使用方法
  objectFactory(构造函数, 初始化参数);



