// Vue.js 的响应式原理基于 Object.defineProperty() 实现数据劫持，主要包括以下几个步骤：

// 1. Vue.js 在初始化时会遍历 data 对象中的所有属性，并使用 Object.defineProperty() 方法将它们转换为 getter 和 setter。

// 2. 当访问一个属性时，Vue.js 会通过 getter 函数进行依赖收集。这个过程就是在建立观察者与被观察对象之间的联系，也就是在 Dep 对象中添加 Watcher。

// 3. 当修改一个属性值时，Vue.js 会通过 setter 函数通知所有依赖该属性的 Watcher 进行更新。这个过程就是触发了 Watcher 中绑定的回调函数进行视图更新等操作。

// 下面是具体代码实现：

// ```
function defineReactive (obj, key, val) {
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      if (Dep.target) { // 如果当前有 Watcher 实例
        dep.depend() // 将当前 Watcher 添加到依赖列表中
      }
      return val
    },
    set: function reactiveSetter (newVal) {
      if (val === newVal) {
        return
      }
      val = newVal
      dep.notify() // 触发所有相关的 Watcher 更新
    }
  })
}

// Dep 类用于管理所有与之相关联的 Watcher 实例
class Dep {
  constructor () {
    this.subs = []
  }

  addSub (sub) {
    this.subs.push(sub)
  }

  removeSub (sub) {
    remove(this.subs,)
  }

  depend () {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  notify () {
    const subs = this.subs.slice()
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}

// Watcher 类用于监听响应式对象属性的变化
class Watcher {
  constructor (vm, expOrFn, cb) {
    this.vm = vm
    this.getter = parsePath(expOrFn)
    this.cb = cb
    this.value = this.get()
  }

  get () {
    Dep.target = this
    const value = this.getter.call(this.vm, this.vm)
    Dep.target = null
    return value
  }

  update () {
    const oldValue = this.value
    this.value = this.get()
    this.cb.call(this.vm, this.value, oldValue)
  }
}
// ```

// 在上述代码中，defineReactive 函数用于将 data 对象中的属性转换为 getter 和 setter。
// 每个属性都对应一个 Dep 实例，负责管理所有依赖该属性的 Watcher 实例。Dep 类中有 addSub、
// removeSub、depend 和 notify 方法，分别用于添加和移除依赖、将当前 Watcher 添加到依赖列表中和触发更新操作。

// Watcher 类则是用于监听数据变化并触发回调函数进行更新操作的。它会在初始化时通过
// parsePath 解析表达式并保存对应的 getter 函数，在 get 方法中调用该函数进行依赖收集然后在
// update 方法中触发回调函数进行更新操作。

// 总体来说，Vue.js 的响应式原理基于 Object.defineProperty() 实现数据劫持和依赖收集
//，通过 Watcher 和 Dep 两个类建立起观察者与被观察对象之间的联系，
//并通过一系列步骤实现自动化更新视图的目的。