const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGO_URI || "mongodb://mongo:27017/mean_demo";

mongoose
  .connect(mongoUri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const messageSchema = new mongoose.Schema({
  text: { type: String, required: true }
});

const Message = mongoose.model("Message", messageSchema);

app.get("/api/message", async (req, res) => {
  try {
    let message = await Message.findOne();

    if (!message) {
      message = await Message.create({ text: "Hello from Node.js + MongoDB!" });
    }

    res.json(message);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch message" });
  }
});

app.post("/api/message", async (req, res) => {
  try {
    const { text } = req.body;
    const newMessage = await Message.create({ text });
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Failed to save message" });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});