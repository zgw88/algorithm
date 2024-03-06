// 遍历这个对象 判断value值是不是对象如果是的话继续
// 递归取出子数据 如果不是的话将其value值作为前面属性的value
const data = {
    a: {
        b: {
            c: 1
        },
        d: 2
    },
    e: 3
   }
   function transData(obj, pre = '') {
       let newObj = {}
       for(let i in obj){
           // console.log(obj[i],'15')
           if(typeof obj[i] === 'object'){
               const res =  transData(obj[i],`${pre}${i}.`)
               newObj = { ...newObj, ...res}
           }else {
               newObj[`${pre}${i}`] = obj[i]
           }
       }
       return newObj
   }
   
   transData(data)

//    function flattenObject(obj, prefix = '') {
//     let result = {};
  
//     for (let key in obj) {
//       if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//         const nestedObj = flattenObject(obj[key], `${prefix}${key}.`);
//         console.log({...nestedObj},'nestedObj')
//         console.log({...result},'result')
//         result = { ...result, ...nestedObj };
//       } else {
//         console.log({...result},'else')
//         result[`${prefix}${key}`] = obj[key];
//       }
//     }
  
//     return result;
//   }
  
//   const input = {
//     a: {
//       b: {
//         c: 1
//       },
//       d: 2
//     },
//     e: 3
//   };
  
//   const output = flattenObject(input);
//   console.log(output); // 输出: { 'a.b.c': 1, 'a.d': 2, 'e': 3 }
  
   console.log(transData(data))