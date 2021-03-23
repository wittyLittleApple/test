
/* 阶乘 */
function test (a) {
    if (a === 1 ) {
        return a
    }
    return a * test(a - 1)
}
test(5) // 120

/* 数组扁平化 */
function flatten(arr) {
    return arr.reduce(function(prev, next){
        return prev.concat(Array.isArray(next) ? flatten(next) : next)
    }, [])
}

/* 拷贝 */
var deepCopy = function(obj) {
    if (typeof obj !== 'object') return
    var newObj = obj instanceof Array ? [] : {}
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
        }
    }
    return newObj
}
