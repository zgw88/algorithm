// 遍历 JSON 数据
const s = {
    a1: {
      b1: { c1: 1 },
      b2: { c2: 1 }
    }
  };
  // 写一个函数，输入s，要求返回结果为：
  [['a1'], ['b1','b2'], ['c1','c2']]
  
  
  // function handleKeys(obj) {
  //   let stack = []
  //   console.log(Object.keys(obj))
  //   for(let i in obj){
  //     if(typeof obj[i] === 'object'){
  //       stack = [].concat(handleKeys(obj[i]))
  //     }else {
  //       stack.push(Object.keys(obj[i]))
  //     }
  //   }
  //   return stack
  // }
  
  // console.log(handleKeys(s));
  
  // 写一个函数 pickUnique，从数组中筛选出值是唯一的元素（要保证输出顺序跟源数组一致）。
  pickUnique([1, 2, 3, 3, '1']); // => [1, 2, '1']
  pickUnique([5, 1, 4, 2, 4, 4, '1']); // => [5, 1, 2, '1']
  
  function pickUnique(arr){
    let len = arr.length
    let result = []; 
 for(let i = 0; i < len; i++) {
   if((arr.indexOf(arr[i])) !== arr.lastIndexOf(arr[i])){
     continue
   }else {
    result.push(arr[i])
   }
 }
 return result;
  }
  console.log(pickUnique([5, 1, 4, 2, 4, 4, '1']))
  

  
  function pinkUniques(arr){
    const newArr = {}
    return arr.filter(value => !newArr.hasOwnProterty(value) && (newArr[value] = true))
  }
  console.log(pickUnique([5, 1, 4, 2, 4, 4, '1']))


  function pinkUniquess(arr){
    return arr.filter((value,index) => arr.indexOf(value) !== index)
  }
  console.log(pickUnique([5, 1, 4, 2, 4, 4, '1']))