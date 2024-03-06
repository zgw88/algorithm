// 在 JavaScript 中，可以使用不同的方法将嵌套的数组展开成一维数组，实现数组拍平的效果。下面介绍几种常见的方式：

// 1. 使用递归：
function flattenArray(arr) {
  let result = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

// 2. 使用 `reduce()` 方法：
function flattenArray(arr) {
  return arr.reduce((result, item) => {
    if (Array.isArray(item)) {
      return result.concat(flattenArray(item));
    } else {
      return result.concat(item);
    }
  }, []);
}

// 3. 使用扩展运算符（ES6）：
function flattenArray(arr) {
  while (arr.some(Array.isArray)) {
    arr = [].concat(...arr);
  }
  return arr;
}

// 这些方法都可以将多层嵌套的数组展开为一维数组。你可以根据自己的需求选择其中一种方式来实现数组拍平。




/**
 * 一维数组变多维数组
 */

function convertTo2DArray(arr, chunkSize) {
    var result = [];
    for (var i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  var inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var outputArray = convertTo2DArray(inputArray, 3);

  console.log(outputArray);
