
/* bind 模拟实现 */
/* 1. 返回一个函数 */
Function.prototype.bind1 = function (context) { //
    let that = this
    return function () {
        return that.apply(context) // 绑定函数可能有返回值
    }
}

/* 2. 可以在执行返回的时候在传入参数 */
Function.prototype.bind2 = function (context) {

    let that = this;
    // 获取bind2函数从第二个参数到最后一个参数
    let arr = Array.prototype.slice.call(arguments, 1);

    return function () {
        // 这个时候的arguments是指bind返回的函数传入的参数
        let bindArgs = Array.prototype.slice.call(arguments);
        return that.apply(context, arr.concat(bindArgs));
    }
}

/* 3. bind 返回的函数作为构造函数的话 this 会失效 传入的参数依旧会生效 * */
/* 没理解完 */
Function.prototype.bind3 = function (context) {
    let that = this
    let arr = Array.prototype.slice.call(arguments, 1)

    let result = function () {
        let bindArgs = Array.prototype.slice.call(arguments);
        // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
        // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
        // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
        return that.apply(this instanceof result ? this : context, arr.concat(bindArgs))
    }
    // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
    result.prototype = this.prototype
    return result
}
