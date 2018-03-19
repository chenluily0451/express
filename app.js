/**
 * Created by chenlu on 2018/3/19.
 */

// 引入express

const express = require('express')

const mongoose = require("mongoose");

// 引入hero路由

const hero = require('./router/hero')

const bodyParser = require("body-parser")


var db = mongoose.connect('mongodb://localhost:27017/myDbs');


// 创建app对象

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// 定义端口号

app.listen(3001,()=>{
  console.log('app listening on port 3001')
})


// hero路由

app.use('/api',hero)



