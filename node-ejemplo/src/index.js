const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const ventasRoutes = require("./routes/ventas");

const appp = express();
const port = process.env.PORT || 9000;

// Middleware
appp.use(express.json());
appp.use('/api', ventasRoutes);


//Routes
appp.get("/", (req, res) => {
    res.send("Welcome to my API");
});


//MongoDB Connection

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB Atlas "))
.catch((error) => console.error(error));

appp.listen(port, ()=> console.log('Server lintening on port ', port));