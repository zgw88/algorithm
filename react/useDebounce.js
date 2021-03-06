import {useEffect,useRef} from 'react'

const useDebounce = (fn,ms = 30,deps= []) => {
    let timeout = useRef();
    useEffect(()=>{
        if(timeout.current) clearTimeout(timeout.current)
        timeout.current = setTimeout(()=>{
            fn()
        },ms)
    },deps)

    const cancel = setTimeout(()=>{
        clearTimeout(timeout.current)
        timeout = null
    })

    return [cancel]
}

export default useDebounce


const useDebounces = (fn,ms = 30,deps=[]) =>{
    let timeout = useRef()
    useEffect(()=>{
        if(timeout.current) clearTimeout(timeout.current)
        timeout.current = setTimeout(()=>{
            fn()
        },ms)
    },deps)

    const cancel = setTimeout(()=>{
        clearTimeout(timeout.current)
        timeout = null
    })
    return [cancel]
}
