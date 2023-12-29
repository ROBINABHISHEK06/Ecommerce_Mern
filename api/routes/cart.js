const { verifyToken, verfiyTokenAuthorization, verfiyTokenAdmin } = require("./verfiyToken")
const Cart = require("./models/Cart")
const router = require("express").Router()


//create 
router.post("/",verifyToken, async(req,res)=>{
    const newCart=new Cart(req.body)
        //    console.log(newCart)
    try{
        const savedCart= await newCart.save()
        res.status(200).json(savedCart)
    }catch(err){
        res.status(500).json(err)
    }

})

 //update

router.put("/:id",verfiyTokenAuthorization,async(req,res)=>{

    try{
         const updateCart=await Cart.findByIdAndUpdate(req.params.id,{
            
            $set:req.body
         },
         {new:true})
         res.status(200).json(updateCart)
    }catch(err){res.status(500).json(err)}
})

// delete

router.delete("/:id",verfiyTokenAuthorization,async(req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.pramas.id)
        res.status(200).json("Cart has been delete")
    }catch(err){
        res.status(500).json(err)
    }
})

// // get user cart

router.get("/find/:userId",verfiyTokenAuthorization,async(req,res)=>{
    try{
        const cart= await Cart.findOne({userId:req.params.id})
        res.status(200).json(cart)
    }catch(err){
        res.status(500).json(err)
    }
})

// // get ALL user Cart

router.get("/",verfiyTokenAdmin,async(req,res)=>{
    try{
        const carts=await Cart.find()
        res.status(200).json(carts)
    }catch(err){
        res.status(500).json(err)
    }
})


  

module.exports=router