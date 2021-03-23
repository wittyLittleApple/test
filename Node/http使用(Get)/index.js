// eslint-disable-next-line @typescript-eslint/no-var-requires
const http = require('http')
const queryString = require('querystring')
const urlLib = require('url')

/* createServer req进入 res出去 */
http.createServer((req, res) => {
    // req 获取前台数据
    let url = ''
    if (req.url.indexOf('?') !== -1) {
        let obj = {}
        let arr = req.url.split('?')
        url = arr[0] // 当前url /user

        obj = queryString.parse(arr[1]) // 效果等同于下面
        /* 第一个参数是一个url地址 第二个参数表示是否解析 query中参数 */
        /* 如果为false query: a=111&b=222 */
        /* 如果为true query: { "a": "111", "b": "222" } */
        obj = urlLib.parse(req.url, true).query
        /* 每次这么写比较麻烦 */
        let arr1 = arr[1].split('&')
        // user=123  password=123456
        for (let i = 0; i < arr1.length; i++) {
            let arr2 = arr1[i].split('=')
            obj[arr2[0]] = arr2[1]
        }
    } else {
        url = req.url // 否则就等于当前 url  /user
    }
}).listen(8080) // 当前端口号 8080
