/**
 * 1: vuex 为啥不直接执行mutaion 而是需要通过action。或者为啥不直接用
 *     action更新state,而是需要用mutation
 * 
 * 2: vuex中更新state后，是怎么做到响应式的。
 */


function debounce (fn,delay) {
    let timer = null
    return function (){
        let context = this
        let args = [...arguments]

        if(timer) {
            clearTimeout(timer)
            timer = null
        }

        timer = setTimeout(()=>{
            fn.apply(context, args)
        },delay)
    }
}

function throttle(fn,delay) {
    let timer = null
    return function(){
        let context = this
        let args = [...arguments]

        if(!timer) {
            timer = setTimeout(()=>{
                fn.apply(context,args)
                timer = null
            },delay)
        }
    }
}