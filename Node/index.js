const http = require('http')
const fs = require('fs')
const urllib = require('url')
const queryString = require('querystring')

let serve = http.createServer((req, res) => {
    console.log(urllib.parse(req.url, true).query)
    res.write('1111')
    res.end()
}).listen(8080, () => {
    console.log('开启了~~')
})
