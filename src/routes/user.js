const express=require("express");
const User = require("../models/user");
const router=express.Router();



router.post('/signin',(req,res)=>{

})


router.post('/signup',(req,res)=>{
    User.findOne({email:req.body.email})
    .exec((error,user)=>{
        if(user) return res.status(400).send({message:"user already registered"})
    })

const {firstName,lastName,email,password}=req.body;

const _user=new User({
    firstName,
    lastName,
    email,
    password,
    userName: (Math.random()*100).toString()
})
 
_user.save((error,data)=>{
    if(error)
    {
        return res.status(400).send({message:error})
    }
    if(data)
    {
       return res.status(200).send({user:data})
    }
})
})


module.exports=router