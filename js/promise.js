// Promise 其实就是一个构造函数，我们使用这个构造函数创建一个 Promise 实例。
// 该构造函数很简单，它只有一个参数，按照 Promise/A+ 规范的命名，
// 把 Promise 构造函数的参数叫做 executor，executor 类型为函数。
// 这个函数又“自动”具有 resolve、reject 两个方法作为参数。
// promise.all里面有一个promise是reject的话，其他resolve的结果也不会返回 可以用promise.allSettled
// 该Promise.allSettled()方法返回一个在所有给定的promise都已经fulfilled或rejected后的promise，并带有一个对象数组，每个对象表示对应的promise结果


function Promise(executor){
    this.status = 'pending'
    this.value = null
    this.reason = null
    this.onFulfilledFunc = []
    this.onRejectedFunc = []

    const resolve = value => {
        if(value instanceof Promise){
            return value.then(resolve,reject)
        }
        setTimeout(()=>{
            if(this.status === 'pending'){
                this.status = 'fulfilled'
                this.value = value
                this.onFulfilledFunc.forEach(cb =>{
                    cb.apply(value)
                })
            }
        },0)
    }

    const reject = reason => {
        setTimeout(()=>{
            if(this.status === 'pending'){
                this.status = 'rejected'
                this.reason = reason
                this.onRejectedFunc.forEach(cb=> cb(reason))
            }
        })

    }

    try {
        executor(resolve,reject)
    }catch (e) {
        reject(e)
    }
}

Promise.prototype.then = function (onfulfilled,onrejected){
    onfulfilled = typeof onfulfilled === 'function' ? onfulfilled : data => data
    onrejected = typeof  onrejected === 'function' ? onrejected : error => {throw error}

    if(this.status === 'fulfilled'){
        onfulfilled(this.value)
    }

    if(this.status === 'rejected'){
        onrejected(this.reason)
    }
    if(this.status === 'pending'){
        this.onFulfilledFunc.push(onfulfilled)
        this.onRejectedFunc.push(onrejected)
    }
}



let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('data')
    }, 2000)
})

promise.then(data => {
    console.log(`1: ${data}`)
})
// promise.then(data => {
//     console.log(`2: ${data}`)
// })





function Promises(excuter){
    this.status = 'pending'
    this.value = null
    this.reason = null
    this.onFuilledFuc = []
    this.onRejectedFuc = []

    const resolve = (value) =>{
        if(resolve instanceof Promise){
            return value.then(resolve,reject)
        }
        setTimeout(()=>{
            if(this.status === 'pending'){
                this.status = 'fuilled'
                this.value = value

                this.onFuilledFuc.forEach(cb =>{
                    cb.apply(this,this.value)
                })
            }
        })
    }


    const reject = (reason) =>{
        setTimeout(()=>{
            if(this.status === 'pending'){
                this.status = 'rejected'
                this.reason = reason

                this.onRejectedFuc.forEach(cb =>{
                    cb.apply(this,this.reason)
                })
            }
        })
    }

    try {
        excuter(resolve,reject())
    }catch (e) {
        reject(e)
    }
}

Function.prototype.thens = function (onfuilled,onRejected){
    onfuilled = typeof onfuilled === 'function' ? onfuilled : data => data
    onRejected = typeof onRejected === 'function' ? onRejected : error => {throw error}

    if(this.status === 'fuilled'){
        onfuilled(this.value)
    }

    if(this.status === 'rejected'){
        onRejectedFuc(this.reason)
    }

    if(this.status === 'pending'){
        this.onFuilledFuc.push(onfuilled)
        this.onRejectedFuc.push(onRejected)
    }
}
