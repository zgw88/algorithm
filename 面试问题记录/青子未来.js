
const data = {
    "1": {
      "text": "1"
    },
    "2": {
      "text": "2"
    },
    "1-1": {
      "text": "1-1"
    },
    "1-2": {
      "text": "1-2"
    },
    "1-2-1": {
      "text": "1-2-1"
    },
    "2-2-1": {
      "text": "2-2-1"
    },
    "3-1-1": {
      "text": "3-1-1"
    }
  }
  

/**
 * 
 * @param {{
  "1": {
    "text": "1",
    "children": {
      "1": {
        "text": "1-1",
      },
      "2": {
        "text": "1-2",
        "children": {
          "1": {
            "text": "1-2-1",
          }
        }
      }
    }
  },
  "2": {
    "text": "2",
    "children": {
      "2": {
        "text": "",
        "children": {
          "1": {
            "text": "2-2-1",
          }
        }
      }
    }
  },
  "3": {
    "text": "",
    "children": {
      "1": {
        "text": "",
        "children": {
          "1": {
            "text": "3-1-1",
          }
        }
      }
    }
  }
}} obj 
 * @returns 
 */

// 树结构转换
function parseTree(data) {
    const paths = Object.keys(data);
    let tree = {};
  
    paths.forEach((path) => {
      tree = parseTreeNode(path, tree, data[path])
    })
  
    return tree
  }
  
  function parseTreeNode(path, tree, value) {
    const treePath = path.split('-');
    let index = 0;
    let activeTree = tree;
    while (index >= 0 && index < treePath.length) {
      const key = treePath[index];
      const node = activeTree[key]
      if (node) {
        activeTree = node.children ? node.children : {...value }; 
        index++;
      } else {
        if (index === treePath.length - 1) {
          index = -1;
          activeTree[key] = {...value, children: {}};
        } else {
          activeTree[key] = {text: '', children: {}};
          activeTree = activeTree[key].children;
          index++;
        }
      }
    }
    return tree;
  }


const res = parseTree(data)
console.log(res,'res')
