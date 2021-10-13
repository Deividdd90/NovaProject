const mongoose = require ("mongoose");
const mongoUrl = "mongodb+srv://UserNovaDB:Nova12456@novaproject.drwkq.mongodb.net/MisionTic";





const db = mongoose.connect(mongoUrl, {  },
    (error) => {
        if (error) {
            console.log("Error - No se pudo conectar a la BD ");}
        else {console.log("Conectado a MongoDB");
    }
});

module.exports = db;