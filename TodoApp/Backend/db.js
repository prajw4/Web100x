const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://prajwalkadam002:Prajwal%403204@cluster0.dqh89cp.mongodb.net/Todoapp?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

const TodoUsers = mongoose.model('TodoUsers', TodoSchema);

module.exports = {
  TodoUsers 
};
