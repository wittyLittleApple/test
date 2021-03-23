
/* 扁平化 就是将嵌套多层的数组转换成只有一层的数组 */

/* 递归 */
let arr = [1, 2, 3, [4, 5, [6]]]

function flatten (arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) === true) { // 如果当前参数是数组的话
            result = result.concat(flatten(arr[i])) // 调用自己 递归 传入当前数组
        } else {
            result.push(arr[i]) // 否则就 push 进数组
        }
    }
    return result // 返回 result
}

console.log(flatten(arr))

/* toString */
function flatten1 (arr) {
    return arr.toString().split(',').map(function (item) {
        return +item
    })
}

console.log(flatten1(arr))

/* es6 */
function flatten2 (arr) {

    while (arr.some(item => Array.isArray(item))) { // arr 中存在数组吗
        arr = [].concat(...arr);
    }

    return arr;
}

console.log(flatten2(arr))

