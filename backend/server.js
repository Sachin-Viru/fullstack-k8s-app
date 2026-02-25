const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/mydb";

mongoose.connect(MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const MessageSchema = new mongoose.Schema({
  text: String
});

const Message = mongoose.model("Message", MessageSchema);

app.get("/api/messages", async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

app.post("/api/messages", async (req, res) => {
  const newMessage = new Message({ text: req.body.text });
  await newMessage.save();
  res.json(newMessage);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
