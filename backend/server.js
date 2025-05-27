const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',  // React frontend ka exact origin
  credentials: true                  // credentials allow karna zaroori hai
}));
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
