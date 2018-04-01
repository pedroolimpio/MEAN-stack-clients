const DB = require('../../DB');
const clientsSchema = require('./schema');

module.exports = DB.mongoose.model("clients", clientsSchema, "clients");