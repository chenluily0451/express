/**
 * Created by chenlu on 2018/3/19.
 */

// 引入express

const express = require('express')

// 引入hero路由

const hero = require('./router/hero')

// 创建app对象

const app = express()


// 定义路由

app.use('/',(req,res) => {
  res.send('Nice to meet U~')
})

// 定义端口号

app.listen(3001,()=>{
  console.log('app listening on port 3001')
})


// hero路由

app.use('/api',hero)



