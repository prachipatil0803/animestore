const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const routes = require("./routes/storeRoute.js");

app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://prachipatil080304:prachi@cluster0.b3bvjr7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Use IPv4 address

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
    // Your code here
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(5000, () => {
  console.log("Server setup");
});
