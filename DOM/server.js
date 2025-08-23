const express = require("express")
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.get("/sum",function(req,res){
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const sum = a + b;

    res.send(sum.toString());
});

app.listen(3000);