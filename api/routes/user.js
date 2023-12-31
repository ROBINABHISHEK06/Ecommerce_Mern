const { verifyToken, verfiyTokenAuthorization, verfiyTokenAdmin } = require("./verfiyToken")
const router = require("express").Router()
const User=require("./models/User")


// //update
router.put("/:id",verfiyTokenAuthorization,async(req,res)=>{
    if(req.body.password){
     req.body.password =CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()   
    }
    try{
         const updateUser=await User.findByIdAndUpdate(req.params.id,{

            $set:req.body
         },{new:true})
         res.status(200).json(updateUser)
    }catch(err){res.status(500).json(err)}
})

// delete

router.delete("/:id",verfiyTokenAuthorization,async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.pramas.id)
        res.status(200).json("user has been delete")
    }catch(err){
        res.status(500).json(err)
    }
})

// get user

router.get("/find/:id",verfiyTokenAdmin,async(req,res)=>{
    try{
        const user= await User.findById(req.params.id)
        const{ password,...orders}=user._doc 
        res.status(200).json(orders)
    }catch(err){
        res.status(500).json(err)
    }
})

// get ALL user

router.get("/",verfiyTokenAdmin,async(req,res)=>{
    const query=req.query.new
    try{
        const users= query 
        ? await User.find().sort({_id:-1}).limit(5)
        : await User.find()
        res.status(200).json(users)
    }catch(err){
        res.status(500).json(err)
    }
})

//get user stats

router.get("/stats",verfiyTokenAdmin,async(req,res)=>{
  const date =new Date()
  const lastyear= new Date(date.setFullYear(date.getFullYear()-1))
  try{
    const data = await User.aggregate([
        {$match:{createdAt:{$gte:lastyear}}},
        {
            $project:{
                month:{$month:"$createdAt"},
            },
        },
        {
           $group:{
            _id:"$month",
            total:{$sum:1}
           }
         }
    ])
     res.status(200).json(data)
  }catch(err){
    res.status(500).json(err)
  }
})


module.exports=router