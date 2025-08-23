const express = require("express");
const zod = require("zod");

const app = express();
app.use(express.json());

function validate(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    });

    const response = schema.safeParse(obj);
    console.log(response);

    return response; // ✅ Return the result!
}

app.post("/login", function(req, res) {
    const validateresponse = validate(req.body); // Now this will get the actual response object

    if (!validateresponse.success) {
        return res.json({
            msg: "The credentials are not written in correct format"
        });
    }

    return res.json({
        msg: "The credentials are right"
    });
});

app.listen(3000);
