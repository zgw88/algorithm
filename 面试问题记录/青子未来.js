
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



/**
 * HTTP请求头和响应头都是由一系列属性组成的，每个属性都有不同的作用。
 * 下面分别介绍HTTP请求头和响应头常见的属性及其作用：

1. HTTP请求头（Request Headers）：
- `Host`：指定服务器的主机名和端口号。
- `User-Agent`：标识发起请求的客户端应用程序或用户代理类型。
- `Content-Type`：指定请求体中包含的数据类型。
- `Authorization`：提供身份验证凭证，通常用于进行用户认证。
- `Accept`：指定客户端能够接受的内容类型。
- `Cookie`：包含之前由服务器发送给客户端的cookie值。

. HTTP响应头（Response Headers）：
- `Content-Type`：指示体中包含的数据类型。
- `Cache-Control`：控制缓存行为，例如是否使用缓存、缓存有效期等。
- `Set-Cookie`：设置服务器发送给客户端的cookie值。
- `Location`：重定向URL，，有许多其他可选属性，它们提了额外的信息以支持各种HTTP功能和特性。

这些请求头和响应头属性在HTTP通信过程中扮演着重要角色。通过设置正确的请求头属性，
可以向服务器传递必要的信息和参数；而响应头属性则提供了服务器返回给客户端的元数据，
用于控制缓存、指示内容类型、重定向等。这些属性对于确保HTTP通信的正常进行以及实现各种功能都至关重要。
 */