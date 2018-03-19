/**
 * Created by chenlu on 2018/3/19.
 */

const mongoose = require('mongoose')

//定义数据模型
// 这里mongoose.Schema最好要写上第二个参数，明确指定到数据库中的哪个表取数据，我这里写了myhero，目的就是为了以后操作数据要去myhreo表中。

const heroSchema = mongoose.Schema({
  name : String,
  age  : String,
  sex  : String,
  address : String,
  dowhat : String,
  imgArr: [],
  favourite : String,
  explain : String
},{collection:'myhero'})

const Hero = module.exports = mongoose.model('hero',heroSchema)
