
/* 双层循环 */
const arr = [1, 2, 3, 4, 1, 2, 3, 4] // 随机数组

function arr1 (arr) {
    let result = []
    let j = 0
    for (let i = 0; i < arr.length; i++) {
        for (j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                break
            }
        }
        if (j === result.length) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(arr1(arr))

/* indexOf 方法 */
function arr2 (arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i])
        }
    }
    return result
}

/* 排序后去重 */
function arr3 (arr) {
    arr.sort((a, b) => {
        return a - b
    })
    let result = []
    let num = null

    for (let i = 0; i < arr.length; i++) {
        if (num !== arr[i]) {
            result.push(arr[i])
        }
        num = arr[i]
    }
    return result
}

/* es6 */
function arr4 (arr) {
    return [...new Set(arr)] || Array.from(new Set(arr))
}
