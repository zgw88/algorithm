import {useEffect,useState,useRef} from 'react'

const useThrottle = (fn,ms=30,pres=[]) =>{
    const [timer,setTime] = useState(ms)
    let previous = useRef()

    useEffect(()=>{
        let now = new Date()
        if(now - previous.current > timer){
            fn()
            previous.current = now
        }
    },pres)

    const cancel = () =>{
        setTime(0)
    }

    return [cancel]
}

export default useThrottle
