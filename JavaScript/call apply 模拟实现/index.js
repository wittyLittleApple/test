/* 实现 call 模拟 */
/* 1. 解决当前 this 指向问题 */
Function.prototype.call = function (context) {
    context.fn = this // 当前 this 指向调用它的函数
    context.fn() // 先执行
    delete context.fn // 在删除掉
}

const obj = {
    value: 1
}

function bar () {
    console.log(this.value) // 1
}

bar.call(obj)

/* 2. 解决 传递多个参数问题 * */
/* 没理解完 */
Function.prototype.call1 = function (context) {
    context.fn = this
    const arr = []
    for (let i = 1; i < arguments.length; i++) {
        arr.push('arguments[' + i + ']') // [arguments[1], arguments[2]]
    }
    eval('context.fn(' + arr + ')') // 这里会调用 Array.toString() 方法 不是那么明白eval只知道会执行
    delete context.fn()
}

const obj1 = {
    value: 2
}

function bar1 (name, age) {
    console.log(this.value, name, age) // 2, 'zxr', 18
}

bar1.call1(obj1, 'zxr', 18)

/* 3. 解决this可以为null 函数也是有返回值 */
Function.prototype.call2 = function (context) {
    context = context || window // 如果传入null 就指向window
    context.fn = this // 指向window 或者当前 函数
    const arr = []
    for (let i = 1; i < arguments.length; i++) {
        arr.push('arguments[' + i + ']')
    }
    const result = eval('context.fn(' + arr + ')') // 接收返回的参数
    delete context.fn()
    return result // 返回
}

const value = 2

const obj2 = {
    value: 1
}

function bar2 (name, age) {
    console.log(this.value) // this 全局就是 2
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.call2(null) // 2

console.log(bar.call2(obj2, 'kevin', 18))
/* object {
   value: 1,
   name: 'kevin',
   age: 18
} */

/* apply模拟实现 */
Function.prototype.apply = function (context, arr) {
    context = context || window
    context.fn = this

    let result = 0
    if (!arr) { // 如果没有arr 参数 就直接执行
        result = context.fn()
    } else {
        const args = []
        for (let i = 0; i < arr.length; i++) {
            args.push('arr[' + i + ']')
        }
        result = eval('context.fn(' + args + ')')
    }

    delete context.fn
    return result
}

const name = 'zxr'
const arr = [1, 2, 3]

function bar3 (arr) {
    console.log(this.name, arr)
}

bar3.apply(null, arr)
