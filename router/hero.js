/**
 * Created by chenlu on 2018/3/19.
 */

const express = require('express')

const router = express.Router()

const Hero = require('../models/hero')

// 查询所有路由信息
router.get("/hero", (req, res) => {
  Hero.find({})
      .sort({ update_at : -1 })
      .then(heros =>{
        res.json(heros)
      })
      .catch(err => {
        console.log('查询所有信息出错')
        res.json(err)
      })
})


// 通过id查询指定信息
router.get("/hero/:id",(req, res) =>{
  Hero.findById(req.params.id)
      .then(hero =>{
        res.json(hero)
      })
      .catch(err => {
        console.log('查询指定id出错')
        res.json(err)
      })
})

// 添加
router.post("/hero",(req, res) =>{
  Hero.create(req.body, (err, hero) => {
    if(err){
      res.json(err)
    }else{
      res.json(hero)
    }
  })
})

// 更新
router.put("/hero/:id",(req, res)=>{
  Hero.findOneAndUpdate(
    {_id: req.params.id},
    {
      $set:{
        name: req.params.name,
        age: req.body.age,
        sex:req.body.sex,
        address: req.body.address,
        dowhat: req.body.dowhat,
        favourite: req.body.favourite,
        explain: req.body.explain
      }
    },
    {
      new: true
    }
  )
    .then(hero => res.json(hero))
    .catch(err => {
      console.log('更新数据出错')
      res.json(err)
    })
})

// 删除
router.delete("/hero/:id",(req, res) => {
  Hero.findOneAndRemove({
    _id: req.params.id
  })
    .then(hero =>{
      res.send(`${hero.title}`)
    })
    .catch(err => {
      console.log('删除出错')
      res.json(err)
    })
})

module.exports = router

