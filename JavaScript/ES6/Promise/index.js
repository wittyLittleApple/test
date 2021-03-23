/* promise 基本用法 */
let a = 1
const promise = new Promise(function (resolve, reject) {
    if (a === 1) { // 假设异步成功
        resolve()
    } else {
        reject()
    }
})

promise.then(function (res) { // 用 then 分别接收resolve 与 reject
    console.log(res)
}, function (rej) {
    console.log(rej)
})

/* try catch 捕获异常 */
promise
    .then()
    .finally() // 无论结果成功与否都会执行


/* all 方法用于多个 promise 实例 */
/* 每个参数都是一个 promise 实例 如果不是就会调用promise.resolve转换成一个 promise 实例 */
const p = Promise.all([p1, p2, p3])
