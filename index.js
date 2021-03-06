const express = require("express");
const session = require("express-session");
const logger = require("morgan")
const cors = require("cors");
const fs = require('fs');
const https = require('https');
const router = require('./routes');
const key = fs.readFileSync("../auth/key.pem","utf-8");
const cert = fs.readFileSync("../auth/cert.pem","utf-8");

const controller = require("./controllers");

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

const server = https
    .createServer(
        {
            key : key,
            cert : cert
        },
        app
    ).listen(4000);
module.exports = server;
///고치는중
    
