// 浅拷贝：一般指的是把对象的第一层拷贝到一个新对象上去
var a = { count: 1, deep: { count: 2 } }
// assign es6 对象方法  第一个参数是目标对象  后面的参数是合并的对象
var b = Object.assign({}, a)
console.log(b)  // {count: 1, deep: { count: 2 }}

// 深拷贝：一般需要借助递归实现，如果对象的值还是个对象，要进一步的深入拷贝，完全替换掉每一个复杂类型的引用
var deepCopy = (obj) => {
    var ret = {}
    for (var key in obj) {
        var value = obj[key]
        // 如果是对象 则进行递归
        ret[key] = typeof value === 'object' ? deepCopy(value) : value
    }
    return ret
}


// 浅拷贝
var a = { count: 1, deep: { count: 2 } }
var b = {...a}

a.deep.count = 5
b.deep.count // 5

// 深拷贝
var a = { count: 1, deep: { count: 2 } }
var b = deepCopy(a)
a.deep.count = 5
b.deep.count // 2




