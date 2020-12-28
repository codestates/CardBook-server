const express = require("express");
const session = require("express-session");
const logger = require("morgan")
const cors = require("cors");
const fs = require('fs');
const https = require('https');
const router = require('./routes')
const key = fs.readFileSync("./auth/key.pem","utf-8");
const cert = fs.readFileSync("./auth/cert.pem","utf-8");

const controller = require("./controllers");

const port = 4000;

const app = express();
//세션설정
app.use(
    session({
        secret: 'CardBook',
        resave: false,
        saveUninitialized: true,
        cookie: {
            domain: "localhost",
            maxAge: 24 * 6 * 60 * 10000,
            sameSite: "none",
            httpOnly: true,
            secure: true,
        }
    })
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const corsOptions = {
    origin: true,
    credentials: true,
    methods: ["GET","POST","OPTIONS"]
}
//CORS설정
app.use(cors(corsOptions));

//Routing
app.use('/users',router.user)
app.use('/contents',router.content)
app.use(express.static('images/users'))
app.use(express.static('images/contents'))

const server = https
    .createServer(
        {
            key : key,
            cert : cert
        },
        app
    ).listen(port, () => {
        console.log(`https://localhost:${port} 서버 실행했습니다.`)
    });
module.exports = server;
