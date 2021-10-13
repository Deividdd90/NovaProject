const express = require("express");
const cors = require ("cors");
const app = express();

//settings
app.set("port", 4000);


//middlewares
app.use(cors());
app.use(express.json());

//routes

app.use ("/api/usuarios", require("./routes/user-route"));
app.use ("/api/productos", require("./routes/prod-route"));
app.use ("/api/ventas", require("./routes/venta-route"));
app.use ("/api/seg_ventas", require("./routes/sventas-route"));


module.exports = app