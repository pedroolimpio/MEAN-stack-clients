var ClientModel = require("./model");

class CreateDAO {

    constructor() {
        console.log("Constructed once of: " + this.constructor.name);
        
    }

    create(json) {

        return new Promise((resolve, reject) => {

            var client = new ClientModel(json);

            client.save(function (err) {

                if (err) {
                    console.log("Error inserting client - ", err);
                    reject({message: err.message, name: err.name});
                } else {
                    console.log("Client successfully inserted. ");
                    resolve({ message:"Client successfully inserted", name: "OK" });
                }

            })

        });

    }

}

module.exports = new CreateDAO();