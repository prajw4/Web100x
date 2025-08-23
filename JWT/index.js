const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "12345678";
const app = express();
app.use(express.json());

const users =[{
    username:"prajwal@gmail.com",
    password:"1234",
    name:"Prajwal Kadam",
},{
    username:"rohan@gmail.com",
    password:"12345",
    name:"rohan bhosale",
},{
    username:"vishal@gmail.com",
    password:"123456",
    name:"vishal thopte",

}]

function userExist(username,password){

    let userExist = false;
    for(let i=0; i<users.length;i++){
        if(users[i].username==username && users[i].password==password){
            userExist=true;
        }
    }

    return userExist;

}

app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExist(username,password)){
        return res.status(403).json({
            msg:"usser does not exist in our memory",
        });
    }

    const token = jwt.sign({username:username},jwtPassword);
    return res.json({
        msg:"Login successfull",
        Token:token,
    });
});

app.get("/user",function(req,res){
    const token = req.headers.authorization;

    try{
        const decode = jwt.verify(token,jwtPassword);
        const username = decode.username

        res.json({
        msg: "Protected data accessed",
        username: username,
    });
    }
    catch(err){
        res.status(401).json({
            msg:"Invalid token"
        })
    }
    
})

app.listen(3000);