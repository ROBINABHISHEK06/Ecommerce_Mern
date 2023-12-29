const { verifyToken, verfiyTokenAuthorization, verfiyTokenAdmin } = require("./verfiyToken")
const Order=require("./models/Order")
const router = require("express").Router()


//create 
router.post("/",verifyToken, async(req,res)=>{
    console.log("res data",req.body)

    const newOrder=new Order(req.body)
    try{
        const savedOrder= await newOrder.save()
        res.status(200).json(savedOrder)
    }catch(err){
        res.status(500).json(err)
    }

})

 //update

router.put("/:id",verfiyTokenAdmin,async(req,res)=>{
   
    try{
         const updateOrder=await Order.findByIdAndUpdate(req.params.id,{
            
            $set:req.body
         },
         {new:true})
         res.status(200).json(updateOrder)
    }catch(err){res.status(500).json(err)}
})

// delete

router.delete("/:id",verfiyTokenAdmin,async(req,res)=>{
    try{
        await Order.findByIdAndDelete(req.pramas.id)
        res.status(200).json("Order has been delete")
    }catch(err){
        res.status(500).json(err)
    }
})

// // get user order

router.get("/find/:userId",verfiyTokenAuthorization,async(req,res)=>{
    try{
        const orders= await Order.findOne({userId:req.params.id})
        res.status(200).json(orders)
    }catch(err){
        res.status(500).json(err)
    }
})

// // get ALL user Cart

router.get("/",verfiyTokenAdmin,async(req,res)=>{
    try{
        const orders=await Order.find()
        res.status(200).json(orders)
    }catch(err){
        res.status(500).json(err)
    }
})

// //get monthly income

router.get("/income", verfiyTokenAdmin, async (req, res) => {
    const productId=req.query.pid
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth },...(productId && {products:{$element:{productId}}}) } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports=router
