const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const wisataRoutes = require("./routes/wisataRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);
app.use("/categories", categoryRoutes);
app.use('/wisata', wisataRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));