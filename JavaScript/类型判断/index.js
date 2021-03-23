
/* typeof */
/* 能检测出6种值 */
/* undefined String Number Object Boolean Function */

/* 使用 Object.prototype.toString */
/* 可以检测出任意类型的值 */
/* 当前 this 如果是 undefined 就是 undefined */
Object.prototype.toString.call(undefined) // [object Undefined]
