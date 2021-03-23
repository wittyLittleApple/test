
/* Map */
/* 本质上是键值对的集合 */
/* set get has delete */
/* 接收对象作为参数 */
const m = new Map()
const o = {
    p: 'Hello World'
}

/* set 设置当前键值对 */
m.set(o, 'content')
/* get 读取这个键 */
m.get(o) // "content"

/* has 查询这个键 */
m.has(o) // true
/* delete 删除这个键 */
m.delete(o) // true
/* 已删除 */
m.has(o) // false


/* 接收数组作为参数 数组成员表示一个个键值对的成员 */
const map = new Map([
    ['name', 'zxr'],
    ['title', '111']
]);

map.size // 2 (长度)
map.has('name') // true (存在name)
map.get('name') // "zxr"
map.has('title') // true
map.get('title') // "111"


/* 实际执行 */
const items = [
    ['name', 'zxr'],
    ['title', '111']
];

const map1 = new Map()
/* 实际执行 */
items.forEach(
    ([key, value]) => map1.set(key, value)
)

/* 遍历方法 */
map1.keys() // 返回键名的遍历器
map1.values() // 返回键值的遍历器
map1.entries() // 返回所有成员的遍历器
map1.forEach() // 遍历 Map 的所有成员
