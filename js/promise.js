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


// promise all
function PromiseAll (promises){
    return new Promise((resolve, reject) =>{
        if(!Array.isArray[promises]) {
            throw error('不是一个数组')
        }
        let resolveCounter = 0
        let promiseNum = promises.length
        let promiseResult = []

        for(let i = 0; i<promiseNum; i++){
            Promise.resolve(promises[i].then(value => {
                resolveCounter ++
                promiseResult[i] = value
                if(resolveCounter === promiseNum){
                    return resolve(promiseResult)
                }
            },
            error =>{
                return reject(error)
            }
            ))
        }
    })
}



// promise race
Promise.race = function(promises){
    return new Promise((resolve,reject) =>{
        for(let i=0; i<promises.length; i++){
            promises[i].then(resolve,reject)
        }
    })
}