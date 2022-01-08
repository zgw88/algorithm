// https://zhuanlan.zhihu.com/p/77876876
class EventEmitter{
    constructor() {
        this.listeners = Object.create(null)
    }

    on(event,listener){
        if(!this.listeners[event]){
            this.listeners[event] = []
        }
        this.listeners[event].push(listener)
    }

    emmit(event,listener){
        const args = Array.prototype.slice.call(arguments)
        args.shift()
        this.listeners[event].forEach(cb =>{
            cb.apply(null,args)
        })
    }

    remove(event,listener){
        const list = this.listeners[event]
        const index = list.indexOf(listener)
        if(index > -1){
            this.listeners[event].splice(index,1)
        }
    }

    once(event,listener){
        function fn(){
            const args = Array.prototype.slice.call(arguments)
            listener.apply(null,args)
            this.remove(event,fn)
        }
        this.on(event,fn)
    }
}















class EventEmitters {
    constructor() {
        this.listeners = Object.create(null)
    }

    on(event,listener){
        if(!this.listeners[event]){
            this.listeners[event] = []
        }
        this.listeners[event].push(listener)
        return this
    }

    emitter(event,listener){
        const args = Array.prototype.slice.call(arguments)
        args.shift()
        if(this.listeners[event]){
            this.listeners[event].forEach(cb =>{
                cb.apply(null,args)
            })
        }
        return this
    }

    remove(event,listener){
        const list = this.listeners[event]
        const index = list.indexOf(listener)
        if(index > 0){
            this.listeners[event].splice(index,1)
        }
    }

    once(event,listener){
        function fn(){
            const args = Array.prototype.slice.call(arguments)
            listener.apply(null,args)
            this.remove(event,fn)
        }
        this.on(event,fn)
    }
}
