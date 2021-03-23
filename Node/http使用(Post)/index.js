
let http = require('http')

http.createServer((req, res) => {
    /* data 有一段数据到达(很多次) */
    let str = ''
    req.on('data', (data) => {
        str += data // 没进入一次数据就拼接
    })
    /* end 数据全部到达的时候(一次) */
    req.on('end', () => {
        console.log(str) // 等结束的时候 str 也拼接完成
    })
}).listen(8080, () => {
    console.log('开启了~~')
})
