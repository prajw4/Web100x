const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { TodoUsers } = require("./db");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.post("/TodoUsers", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);  // Validates req.body

  if (!parsedPayload.success) {
    console.log(parsedPayload.error);  // Debug print
    return res.status(411).json({
      msg: "You have the wrong inputs"
    });
  }

  await TodoUsers.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  });

  res.json({
    msg: "Your Todo is created"
  });
});


// GET - Show all Todos
app.get("/Get", async function (req, res) {
  const TodoUser = await TodoUsers.find({});
  res.json({ TodoUser });
});

// PUT - Mark Todo as completed
app.put("/TodoUsers/:id", async (req, res) => {
  const updatePayload = { id: req.params.id };
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    return res.status(411).json({ msg: "Invalid ID format" });
  }

  try {
    const result = await TodoUsers.updateOne(
      { _id: updatePayload.id },
      { completed: true }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ msg: "Todo not found or already completed" });
    }

    res.json({ msg: "Todo marked as completed ✅" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal server error" });
  }
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});