const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI || "";

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
