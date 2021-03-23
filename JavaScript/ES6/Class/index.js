
function Person (x, y) {
    this.x = x
    this.y = y
}

Person.prototype.toString = function () {
    console.log(this.x + '调用了toString方法' + this.y)
}

let person = new Person(1, 2)

/* 上面代码用class改写就是 */
/* 上面的构造函数 对应 下面的构造方法 */

class Point {
    constructor (x, y) {
        this.x = x
        this.y = y
    }

    toString () {
        console.log(this.x + '调用了toString方法' + this.y)
    }
}

/* 完全可以看做构造函数的另一种写法 */
console.log(Point === Point.prototype.constructor) // true

/* 使用的时候跟构造函数完全一致 也是使用new命令 */
let point = new Point(1, 2)
console.log(point.toString()) // '1调用了toString方法2'

/* 类的所有方法都定义在类的 prototype 中 */
/* 所以类的新方法可以添加在类的对象上面, Object.assign方法可以很方便地一次向类添加多个方法 */
Object.assign(Point.prototype, { // 添加多个方法
    toValue () {

    },
    toString () {

    }
})

/* class 的继承 */
class Point1 {
    constructor (x, y) {
        this.x = x
        this.y = y
    }

    toString () {
        console.log(this.x + this.y)
    }
}

class PointText extends Point1 { // 通过 extends 继承 Point1 所有方法以及属性
    constructor () {
        super() // 使用 super 方法  用来新建父类的 this 得到与父类相同的实例属性和方法
    }

    getToString () {
        console.log(super.toString()) // 只有 super 方法才会调用父类实例
    }
}

let a = new PointText() // 如果父类没有调用super 就会导致新建实例出错

/* 如果子类没有添加 constructor 方法 这个方法就会被默认添加 如以下 */
class Text extends Point1 {

}
/* 相当于 */
class Text1 extends Point1 {
    constructor (...args) {
        super(...args)
    }
}

/*  */
class ColorPoint extends Point {
    constructor(x, y, color) {
        /* 只有调用过 super 方法才能使用 this 关键字 */
        // this.color = color // 会报错
        super(x, y)
        this.color = color // 不会报错
    }
}

let b = new ColorPoint(1, 1, 'blue')
/* instanceof 判断当前对象是否是这个特定类或者这个子类的实例 */
console.log(b instanceof Point) // true
console.log(b instanceof ColorPoint) // true


/* static 表示静态变量(方法) 只有一个副本 被所有实例共享 */
class A {
    static hello() {
        console.log('hello world')
    }
}

/* B 继承了 A 也继承了 A 的静态方法 */
class B extends A {
}

B.hello()  // hello world

/* getPrototypeOf 可以从子类上查看父类 */
console.log(Object.getPrototypeOf(PointText)) // Point1
