const express = require('express');
const router = express.Router();

const contatoController = require('../controllers/contato.controller');

router.post('/contacts', contatoController.contatoCreate);
router.get('/contacts', contatoController.contatoAll);
router.get('/contacts/create', contatoController.contatoForm);
router.get('/contacts/search', contatoController.contatoSearch)
router.get('/contacts/:id', contatoController.contatoDetails);
router.post('/contacts/:id/update', contatoController.contatoUpdate);
router.get('/contacts/:id/update', contatoController.contatoGet);
router.get('/contacts/:id/delete', contatoController.contatoDelete);


module.exports = router;