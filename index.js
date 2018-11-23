const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/public", express.static(__dirname + '/public'));

const contato = require('./routes/contato.route');

app.use('/', contato);

let port = 3050;

app.listen(port, () => {
    console.log('Servidor rodando na porta: ' + port);
});