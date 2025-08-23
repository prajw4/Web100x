const express = require('express')
const zod = require('zod');
const {User , Account}= require("../db")
const {JWT_SECRET} = require("../config")
const router = express.Router();
const jwt = require('jsonwebtoken');

const signupBody = zod.object({
    username:zod.string().email(),
    firstName:zod.string(),
    lastName:zod.string(),
    password:zod.string()
});

router.post('/signup',async(req ,res)=>{
    const result = signupBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message:"Email already taken / Inavlid inputs",
            errors: result.error.errors
        })
    }

    const {username , firstname , lastname , password} = result.data

    const existingUser = await User.findOne({
        username : req.body.username
    })

    if(existingUser){
        res.status(411).json({
            message:"Email already taken"
        })
    }
    
    const user = await User.create({
        username,
        firstname,
        lastname,
        password
    });

    const userId = user._id;

    await Account.create({
        userId,
        balance: 1 + Math.random()* 1000
    })

    const token = jwt.sign({
        userId,
    }, JWT_SECRET);

    res.json({
        message:"User created successfully",
        token: token
    })

});

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
});

router.post('/sign',async(req,res)=>{
    const {success} = signinBody.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            message:"Email already taken",
            errors: result.error.errors
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });
    if(user){
       const token = jwt.sign({
        userId: user._id
       }, JWT_SECRET);

       res.json({
        token:token
       })
       return;
    }

    res.status(411).json({
        message:"Error while logging in",
    })

})
const updatebody = zod.object({
    firstname: zod.string().optional(),
    lastname: zod.string().optional(),
    password: zod.string().optional()
});
router.put("/",authMiddleware,async(req,res)=>{
    const result = updatebody.safeParse(req.body);
    if(!result.success){
        return res.status(411).json({
            message:"Invalid inputs",
            errors: result.error.issues
        })
    }

    const updatedata = result.data

    await User.findOne(
        {_id : req.userId},
        {$set: updatedata}
    );

    res.json({
        message:"Updated successfully"
    })

})

router.get("/bulk", async(req, res) => {
        const filter = req.query.filter || "";
        
        const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = router;