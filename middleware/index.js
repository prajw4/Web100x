const express = require("express");
const app = express();
const zod = require("zod");

// Define a schema for the full object
const schema = zod.object({
    email: zod.string().email()
});

app.use(express.json());

app.post("/", function (req, res) {
    const response = schema.safeParse(req.body); // Validate full object

    if (!response.success) {
        return res.status(400).json({
            msg: "Invalid input",
            issues: response.error.issues, // optional: show validation issues
        });
    }

    res.json({
        msg: "Email is valid!",
        data: response.data
    });
});

/*const schema = zod.array(zod.number());
app.use(express.json());*/

/*app.post("/health-checkup",function(req,res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){
    return res.status(411).json({
            msg:"input is invalid"
        })
    } else{
    res.send({
        response
    });

  }
}); */



// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
