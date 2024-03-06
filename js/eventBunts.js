class EventBunts  {
    constructor() {
        this.events = {}
    }

    // 订阅事件
    on(eventname,cb){
        if(eventname){
            this.event[eventname] = this.events[eventname] || []
            this.event[eventname].push(cb)
        }
    }

    //发布事件
    emit(eventname,data){
        if(eventname){
            this.events[eventname].forEach(callback => {
                callback(data)
            });
        }
    }

    //取消事件
    cancel(eventname,cb){
        if(eventname){
            this.events[eventname] = this.events[eventname].filter(callback => cb !== callback)
        }
    }

    //订阅一次
    once(eventname,cb){
        if(eventname){
            const onceCb = data => {
                cb(data);
                this.cancel(eventname,onceCb)
            }
            this.events[eventname].on(eventname,onceCb)
        }
    }
}