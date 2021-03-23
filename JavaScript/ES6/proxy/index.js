
/* proxy 用来修改某些操作的默认行为 等同于在语言层面进行修改 */
/* 类似于对象之前加一层拦截器 */

var proxy = new Proxy({}, {
    /* 取值 目标对象 要访问的属性 */
    get: function(target, propKey) {
        return 35
    },
    /* 赋值 目标对象 属性名 实例本身 */
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer')
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid')
            }
        }

        // 对于满足条件的 age 属性以及其他属性，直接保存
        obj[prop] = value
    }
})

proxy.time // 35
proxy.name // 35
proxy.title // 35
