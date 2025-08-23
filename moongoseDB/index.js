const express = require("express")
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://prajwalkadam002:Prajwal%403204@cluster0.dqh89cp.mongodb.net/user_appnew?retryWrites=true&w=majority&appName=Cluster0");
const User = mongoose.model('Users',{name:String,email:String,password:String});

app.post("/signup",async function(req,res){
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;

    const UserExist = await User.findOne({email: username });

    if(UserExist){
        return res.status(400).json({
            msg:"Username already exist"
        });
    }

    const user = new User({name:name,
    email: username,
    password: password
});

try {
    await user.save();
    return res.status(200).json({
      msg: "User registered successfully"
    });
  } catch (err) {
    return res.status(500).json({
      msg: "Error saving user",
      error: err
    });
  }
});

// Start the server
app.listen(3000, () => {
  console.log(" Server is running on http://localhost:3000");
});