
const express = require('express')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')

const app = express()

app.listen(8080, () => {
    console.log('~开启')
})

app.use(cookieParser())
app.use(cookieSession({
    keys: ['aaa', 'bbb', 'ccc']
}))


app.use('/login.cgi', (req, res, next) => { // next可选 需要往下继续调用 next() 实现链式操作
    /* Get 不需要中间件
        query
        Post 需要中间件 body-parser
        app.use(parser.urlencoded({ // 两个参数
            extended, // 扩展模式
            limit // 限制数据大小 默认大小100k
        }))
        body
    */
    res.send('login')
})

app.use((req, res) => { // 接受一个函数表示针对所有路径都管用
    req.secret = 'qwertyuiop' // 秘钥
    res.cookies('user', '111', {signed: true})

    // 需要一个 keys
    console.log(req.session) // cookie-session
})

// cookie session
