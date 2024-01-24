const User = require("./models/User")
const router = require("express").Router()
const CryptoJS =require("crypto-js")
const jwt =require("jsonwebtoken")

//Register

router.post("/register",async(req,res)=>{
    const newUser= new User({
        username: req.body.username,
        phone:req.body.mobile,
        email:req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),                                                                      
    })
    // console.log(newUser);
    try{
        const savedUser= await newUser.save()
         res.status(201).json(savedUser)
    }catch(err){
         res.status(500).json(err)
    }  
})


// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });

        if (!user) {
            return res.status(401).json("Wrong credentials");
        }

        const hashedPass = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
        const originalPassword = hashedPass.toString(CryptoJS.enc.Utf8);

        if (originalPassword !== req.body.password) {
            return res.status(401).json("Wrong credentials");
        }

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin // jwt web
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );

        const { password, ...orders } = user._doc; // omitting password from response
        res.status(200).json({ ...orders, accessToken });
    } catch (err) {
        res.status(500).json(err);
    }
});





module.exports=router