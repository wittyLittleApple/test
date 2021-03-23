/* set 构造函数 */

/* 操作方法 */
/* add delete has clear */
let set = new Set() // 声明一个构造函数
console.log(set.add(1).add(2)) // Set [ 1, 2 ] 添加某个值返回set结构本身

console.log(set.delete(2)) // true 删除某个值 返回是否成功
console.log(set.has(2)) // false 查询某个值 返回是否成功

console.log(set.clear()) // undefined 清空所有值 无返回值
console.log(set.has(1)) // false

/* 遍历方法 */
/* keys values entries forEach */
let set1 = new Set(['a', 'b', 'c']) // keys 返回键名遍历器
console.log(set1.keys()) // SetIterator {"a", "b", "c"}
console.log([...set1.keys()]) // ["a", "b", "c"]

let set2 = new Set(['a', 'b', 'c']) // values 返回键值遍历器
console.log(set2.values()) // SetIterator {"a", "b", "c"}
console.log([...set2.values()]) // ["a", "b", "c"]

let set3 = new Set(['a', 'b', 'c']) // entries 返回键值对遍历器
console.log(set3.entries()) // SetIterator {"a", "b", "c"}
console.log([...set3.entries()]) // [["a", "a"], ["b", "b"], ["c", "c"]]

let set4 = new set([1, 2, 3]) // forEach 返回回调函数遍历每个成员 无返回值
set4.forEach((value, key) => console.log(key + ': ' + value))
// 1: 1
// 2: 2
// 3: 3

/*
*   Set.prototype.constructor：构造函数，默认就是 Set 函数。
*   Set.prototype.size：返回 Set 实例的成员总数。
*  */
