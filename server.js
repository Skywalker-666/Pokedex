require("dotenv").config();  // Load environment variables

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const pokemonRoutes = require("./routes/pokemonRoutes");


const app = express();


app.use("/api/pokemon", pokemonRoutes);

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB Connection Error:", err));

app.get("/", (req, res) => {
    res.send("Welcome to the Pokédex API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
