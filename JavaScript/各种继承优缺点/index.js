/* 原型链继承 */
/* 引用类型的属性被所有实例共享 arr.push('') */
function Person () {
    this.name = 'zxr'
}
Person.prototype.getName = function () {
    console.log(this.name)
}
function Child () {

}
Child.prototype = new Person()
let result = new Child()
console.log(result.getName()) // 'zxr'



/* 构造函数继承 */
/* 避免引用类型的属性被所有实例共享 */
/* 每次创建实例都会创建一次方法 */
function Person1 () {
    this.names = ['111', '222']
}

function Child1 () {
    Person1.call(this)
}

let result1 = new Child1()
result1.names.push('111')
console.log(result1.names) // ["111", "222", "111"]
let result2 = new Child1()
console.log(result2.names) // ["111", "222"]



/* 组合继承 */
/* 融合原型链 构造函数继承的优点 */
function Parent (name) {
    this.name = name
    this.colors = ['red', 'blue', 'green']
}

Parent.prototype.getName = function () {
    console.log(this.name)
}

function ParentChild (name, age) {
    Parent.call(this, name)
    this.age = age
}

ParentChild.prototype = new Parent()
ParentChild.prototype.constructor = ParentChild

let child1 = new ParentChild('zxr', '18')
child1.colors.push('black')

console.log(child1.name) // zxr
console.log(child1.age) // 18
console.log(child1.colors) // ["red", "blue", "green", "black"]

let child2 = new ParentChild('xgq', '20')

console.log(child2.name) // xgq
console.log(child2.age) // 20
console.log(child2.colors) // ["red", "blue", "green"]



/* 原型式继承 */
/* 与原型链继承公有缺点 */
function createObj (o) {
    function F () {}
    F.prototype = o
    return new F()
}

let obj = {
    name: 'zxr',
    colors: ['red', 'blue']
}

let person1 = new createObj(obj)
let person2 = new createObj(obj)

person1.name = '111'
console.log(person2.name) // 'zxr'

person1.push('green')
console.log(person2.colors) // ['red', 'blue']



/* 寄生式继承 */
/* 跟借用构造函数模式一样，每次创建对象都会创建一遍方法 */
function createObj1 (o) {
    let clone = Object.create(o)
    clone.sayName = function () {
        console.log('hi')
    }
    return clone
}
