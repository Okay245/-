const express = require('express');
const morgan = require('morgan');
const session = require('express-session');

//解析post数据的模块
// const bodyparser = require('body-parser');



var app = express();

//打印请求日志
app.use(morgan("dev"));

//配置使用session模块
app.use(session({
    name: "session",
    secret: "123456",
    resave: false,
    rolling: true,
    cookie: { maxAge: 1000 * 60 * 30 },
    saveUninitialized: true
}));

//创建web静态资源目录
app.use(express.static('../dist'));

//登录时保存session
app.get('/savesession', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Credentials', true);
    let uid = req.query.uid;
    req.session.data = {
        uid: parseInt(uid)
    };
    console.log(req.session.data);
    res.send('{"status":1}');
});

//请求接口时获取session
app.get('/getsession', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Credentials', true);
    console.log(req.session.data);
    if (req.session.data) {
        let data = req.session.data;
        res.send(`{"status":1, "uid":${data.uid}}`);
    } else {
        res.send(`{"status":0}`);
    }
});

//销毁session
app.get('/delsession', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Credentials', true);
    req.session.destroy()
    res.send('{"status":1}');
});

app.listen("3000", () => console.log("已启动"));