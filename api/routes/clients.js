var express = require('express');
var router = express.Router();
var clientsController = require('../controllers/clients');

router.route('/clients').get(clientsController.getAll);
router.route('/client/:cpf').get(clientsController.get);
router.route('/client').put(clientsController.create);
router.route('/client').post(clientsController.update);
router.route('/client/:cpf').delete(clientsController.delete);
router.route('/client/search/:name').get(clientsController.search)

module.exports = router;
