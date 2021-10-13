const app = require("./app");
require ("./database");

async function main(){
    await app.listen(app.get("port")); 
    console.log ("Servidor en el puerto 4000");
}

main();