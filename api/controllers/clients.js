var createImplementation = require("../model/clients/create");
var updateImplementation = require("../model/clients/update");
var deleteImplementation = require("../model/clients/delete");
var getImplementation    = require("../model/clients/get");
var searchImplementation = require("../model/clients/search");

module.exports = {
	getAll: function (req, res) {

		getImplementation.getAll().then(result => {
			res.status(result.statusCode).send(result);
		}).catch(err => {
			res.status(err.statusCode).send(err);
		});

	},
	get: function (req, res) {

		getImplementation.get(req.params).then(result => {
			res.status(result.statusCode).send(result);
		}).catch(err => {
			res.status(err.statusCode).send(err);
		})

	},
	search: function(req, res) {

		searchImplementation.search(req.params).then(result => {
			res.status(result.statusCode).send(result);
		}).catch(err => {
			res.status(err.statusCode).send(err);
		})


	},
	create: function(req, res) {

		createImplementation.create(req.body).then(result => {
			res.status(result.statusCode).send(result);
		}).catch(err => {
			res.status(err.statusCode).send(err);
		})

	},
	update: function (req, res) {

		updateImplementation.update(req.body).then(result => {
			res.status(result.statusCode).send(result);
		}).catch(err => {
			res.status(err.statusCode).send(err);
		});
	},
	delete: function (req, res) {

		deleteImplementation.delete(req.params).then(result => {
			res.status(result.statusCode).send(result);
		}).catch(err => {
			res.status(err.statusCode).send(err);
		})

	}
}