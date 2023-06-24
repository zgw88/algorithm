function isObject(val){
    return typeof val === 'object' && val !==null
}

function deepClone(obj,hash = new WeakMap()){
    if(!isObject(obj)) return obj;
    if(hash.has(obj)) return hash.get(obj)
    const newObj = Array.isArray(obj) ? [] : {}
    hash.set(obj,newObj)
    for (let key in obj){
        if(Object.prototype.hasOwnProperty.call(obj,key)){
            if(isObject(obj[key])){
                newObj[key] = deepClone(obj[key],hash)
            }else {
                newObj[key] = obj[key]
            }
        }
    }
    return newObj
}

let a = {a: 1,b:{c:2,d:{e:'sss',f:'fffdd'}}}

let dd = deepClone(a)

console.log(dd)



function _deepClone (obj,hash = new WeakMap()){
    if(!isObject(obj)) return obj
    if(hash.has(obj)) return hash.get(obj)
    let newObj = Array.isArray(obj) ? [] : {}
    hash.set(newObj,obj)
    for (let key of obj){
        if(Object.prototype.hasOwnProperty.call(obj,key)){
            if(typeof obj[key] === 'object'){
                newObj[key] = _deepClone(obj[key],hash)
            }else{
                newObj[key] = obj[key]
            }
        }
    }
    return newObj
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object'
}

function deepClones (obj) {
    if(!isObject(obj)) return
    let newObj = Array.isArray(obj) ? [] : {}
    
    for(let key in obj){
        if(isObject(obj[key])){
            newObj[key] = deepClones(obj[key])
        }else {
            newObj[key] = obj[key]
        }
    }
}








// function isObject (obj){
//     return obj !== null && typeof obj === 'object'
// }
//
// function deepClone(obj,hash = new WeakMap()){
//     if(!isObject(obj)) return obj
//     if(hash.has(obj)) return hash.get(obj)
//     let newObj = Array.isArray(obj) ? [] : {}
//     hash.set(obj,newObj)
//     for(let key in obj){
//         if(Object.prototype.hasOwnProperty.call(obj,key)){
//             if(isObject(obj[key])){
//                 newObj[key] = deepClone(obj[key],hash)
//             }else {
//                 newObj[key] = obj[key]
//             }
//         }
//     }
//     return newObj
// }
