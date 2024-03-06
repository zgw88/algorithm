function main(obj,id) {
    let res = []
    for(let i in obj){
        if(obj[i].id && obj[i].id === id && obj[i].sub){
            res = res.concat(main(obj[i].sub, obj[i].sub.id))
        }else {
            res.push(id)
        }
    }
    res = res.sort((a,b) => a - b)
    return res
}
/**如下数据 输入9的时候返回路径[7,8,9],输入1 的时候返回[1] */
const data = [
    {
        'id': 1,
        'sub': [
            {
                'id': 2,
                'sub': [
                    {
                        'id': 3,
                        'sub': null
                    },
                    {
                        'id': 4,
                        'sub': [
                            {
                                'id': 6,
                                'sub': null
                            }
                        ]
                    },
                    {
                        'id': 5,
                        'sub': null
                    }
                ]
            }
        ]
    },
    {
        'id': 7,
        'sub': [
            {
                'id': 8,
                'sub': [
                    {
                        'id': 9,
                        'sub': null
                    }
                ]
            }
        ]
    },
    {
        'id': 10,
        'sub': null
    }
];

main(data,7);

// console.log(main(data,9))

console.log(findPathById(data))
function findPathById(data, targetId) {
    // 创建一个栈来保存当前路径
    const stack = [];
    
    // 定义递归函数进行深度优先搜索
    function dfs(node) {
      // 将当前节点加入到路径中
      stack.push(node.id);
      
      // 如果找到了目标节点，返回路径结果
      if (node.id === targetId) {
        return true;
      }
      
      // 如果存在子节点，则遍历子节点进行搜索
      if (node.sub && node.sub.length > 0) {
        for (const child of node.sub) {
          if (dfs(child)) {
            return true;
          }
        }
      }
      
      // 回溯：从路径中移除当前节点
      stack.pop();
      
      return false;
    }
    
    // 遍历每个根节点开始搜索
    for (const root of data) {
      if (dfs(root)) {
        break;
      }
    }
    console.log(stack,'101')
    
    return stack;
  }
  