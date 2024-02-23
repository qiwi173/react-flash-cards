const profile=require('../../components/Profile')
const router = require("express").Router();
const { User } = require("../../db/models");
router.get('/',async(req,res)=>{
try {
  const {id}= req.params
  const NameEmail=await User.findOne({where:{id}})
  res.send(res.renderComponent(profile,{NameEmail}))
  
} catch ({message}) {
  res.send(message)
  
}
  
  })
  module.exports=router