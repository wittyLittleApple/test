
/* 遍历器 */
/* 为不同的数据结构提供一种统一的访问机制，用来处理所有数据结构 */

/* iterator 遍历过程 */
/* 1. 创建一个指针对象， 指向当前数据结构的起始位置，遍历器本质上，就是一个指针对象 */
/* 2. 第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员 */
/* 3. 第二次调用指针对象的next方法，可以将指针指向数据结构的第二个成员 */
/* 4. 不断调用指针对象的next方法，直到它指向数据结构的结束位置 */

let it = makeIterator(['a', 'b']);

it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }

function makeIterator(array) {
    let nextIndex = 0
    return {
        next: function() { // 执行 next
            return nextIndex < array.length ?
                {value: array[nextIndex++], done: false} :
                {value: undefined, done: true};
        }
    }
}

/* 调用symbol.iterator方法 返回一个遍历器对象 */








/* Generator 函数 */
/* 执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数 */
/* Generator 函数是一个普通函数，但是有两个特征 一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态 */
/* es6没有规定星号出现在哪个位置 */
function* test () {
    yield 'hello'
    yield 'world'
    return '123'
}

/* 该函数并不会执行，只是指向内部函数的指针对象 */
let a = test()
a.next() // { value: 'hello', done: false }
a.next() // { value: 'world', done: false }
a.next() // { value: '123', done: true }

/* yield 表达式 */
/* 遇到 yield 表达式就暂停后面的操作，返回后面的那个表达式的值，作为返回的对象的 value 值 */
/* 下一次调用 next 方法，再继续向下执行直到遇到下一个yield */
/* 如果没有遇到新的yield，就一直运行到函数结束，直至return 返回return中的值作为对象的 value 值 */
/* 如果没有 return 值，就返回一个 undefined */
