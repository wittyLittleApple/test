
/* new 模拟实现
* 访问到构造函数以及原型上面的属性
*  */
function objectFactory () {
    let obj = new Object()
    let Constructor = [].shift.call(arguments)

    obj.__proto__ = Constructor.prototype

    Constructor.apply(obj, arguments)

    return obj
}

/* 如果返回的是一个对象就返回该对象 */

function objectFactory1 () {
    let obj = new Object()
    let Constructor = [].shift.call(arguments)

    obj.__proto__ = Constructor.prototype

    let result = Constructor.apply(obj, arguments)

    return typeof result === 'Object'? result: obj
}
