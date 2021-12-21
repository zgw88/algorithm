// 防抖
export function fnDebounce(fn, delay) {
    let timer = null;
    let ctx;
    let args;

    const later = function () {
        fn.apply(ctx, args);
        timer = null;
    };

    return function () {
        ctx = this;
        args = arguments;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }

        timer = setTimeout(later, delay);
    };
}

// 节流

export function fnThrotle(fn,delay,atleast){
    let timer = null
    let previous = null

    return function (){
        const now = +new Date()
        if(!previous) previous = now
        if(atleast && previous - now > atleast){
            fn()
            previous = now
            clearTimeout(timer)
        }else {
            timer = setTimeout(function (){
                fn()
                previous = null;
            },delay)
        }
    }
}


function throttle(fn, delay) {
    var ctx;
    var args;
    // 记录上次触发事件
    var previous = Date.now();

    var later = function () {
        fn.apply(ctx, args);
    };

    return function () {
        ctx = this;
        args = arguments;
        var now = Date.now();
        // 本次事件触发与上一次的时间比较
        var diff = now - previous - delay;

        // 如果隔间时间超过设定时间，即再次设置事件触发的定时器
        if (diff >= 0) {
            // 更新最近事件触发的时间
            previous = now;
            setTimeout(later, delay);
        }
    };
}
