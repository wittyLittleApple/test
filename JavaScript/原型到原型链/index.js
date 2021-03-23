/* 构造函数创建对象 */
function Person () {

}

const person = new Person()

person.name = 'zhouxinrui'
console.log(person.name) // 'zhouxinrui'

/* prototype */
/* 只有函数才有 prototype 属性 */

function PersonPrototype () {

}

/* 函数的 prototype 指向的是一个对象， 这个对象正是调用该构函数而创建的实例的原型(也就是指的 p1 p2的原型) */
PersonPrototype.prototype.name = 'zxr'

const p1 = new PersonPrototype()
const p2 = new PersonPrototype()

console.log(p1.name, p2.name) // 'zxr', 'zxr'

/* __proto__ */
/* 每一个 JavaScript 对象都有一个 __proto__ 属性(除了null) 这个属性会指向该对象的原型 */
function PersonProto () {

}

const p3 = new PersonProto()

console.log(p3.__proto__ === PersonProto.prototype) // true

/* constructor */
/*
既然实例对象和构造函数都可以指向原型, 原型指向实例倒没有
因为一个构造函数person 可以生成多个实例(上面的p1 p2)
但是原型可以指向构造函数， 那就是constructor
*/

function PersonConstructor () {

}

const p3 = new PersonConstructor()

console.log(PersonConstructor === PersonConstructor.prototype.constructor) // true
