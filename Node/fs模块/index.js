
/* 进行文件操作 */
/* file System 文件系统 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')

// /* readFile 读的文件是谁 & 回调函数 */
fs.readFile('index.txt', (err, data) => {
    if (err) { // 如果存在该文件
        console.log(err) // 报错就会执行
    } else { // 否则打印当前data
        console.log(data.toString()) // 调用toString 方法(二进制数据) 转成文本
    }
}) // 读文件

/* 当前path 写入什么 回调函数 */
fs.writeFile('index.txt', '33333', (err) => {
    console.log(err)
}) // 写文件
