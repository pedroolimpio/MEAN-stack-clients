var environment = require("../environment/config");

class DB {

    constructor() {
        this.mongoose = require('mongoose');

        var connectionOptions = {
            connectTimeoutMS: 3000,
            keepAlive: 120,
            autoReconnect: true,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 2000,
        };
        
        this.mongoose.connect(environment.prod ? environment.DB_prod.connectionString : environment.DB_dev.connectionString).then(() => {

            console.log("Connected with MongoDB");
            console.log("Constructed once of: " + this.constructor.name);

        }).catch((err) => {
            console.log("Error connecting with MongoDB: ", err);
        });
    }

}

module.exports = new DB();