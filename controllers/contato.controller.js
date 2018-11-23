const express = require('express');
const app = express(); const request = require('request');
var bodyParser = require('body-parser');
const axios = require('axios');

app.set("views", "../views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

let url = 'https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts';
var contatoController = {};

contatoController.contatoForm = (req, resp) => {
    resp.render('create', {});
}

contatoController.contatoCreate = (req, resp) => {
    axios.post(url, {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender
    })
        .then((response) => {
            console.log(response);
            resp.redirect('/contacts');
        })
        .catch((error) => {
            console.log(error);
        });
};

contatoController.contatoAll = (req, resp) => {
    axios.get(url)
        .then((response) => {
            resp.render('home', { contacts: response.data });
        })
        .catch((error) => {
            console.log(error);
        });
};

contatoController.contatoDetails = (req, resp) => {
    axios.get(url + '/' + req.params.id)
        .then((response) => {
            resp.render('show', { contact: response.data });
            resp.redirect('/contacts/' + req.params.id);
        })
        .catch((error) => {
            console.log(error);
        });
};

contatoController.contatoGet = (req, resp) => {
    axios.get(url + '/' + req.params.id)
        .then((response) => {
            resp.render('update', { contact: response.data });
        })
        .catch((error) => {
            console.log(error);
        });
};

contatoController.contatoUpdate = (req, resp) => {
    axios.put(url + '/' + req.params.id,
        {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            gender: req.body.gender
        })
        .then((response) => {
            resp.redirect('/contacts');
        })
        .catch(function (error) {
            console.log(error);
        });
};

contatoController.contatoDelete = (req, resp) => {
    request.delete({
        url: url + '/' + req.params.id,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    }, function (err, response, body) {
        resp.redirect('/contacts');
    });
};

contatoController.contatoSearch = (req, res) => {
    res.render('search', { contact: null })
}

module.exports = contatoController;
