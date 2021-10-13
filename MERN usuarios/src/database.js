const mongoose = require('mongoose');

const user = 'lucero';
const password = 'Luceale3';
const dbname = 'Novaproject1';
const uri = `mongodb+srv://${user}:${password}@cluster0.hmsot.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log(e))

module.exports = mongoose;