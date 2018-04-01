var ClientModel = require("./model");

class GetDAO {

    constructor() {
        console.log("Constructed once of: " + this.constructor.name);
    }

    get(cpf) {

        return new Promise((resolve, reject) => {

            ClientModel.findOne({ cpf: cpf }, function (err, data) {

                if (err) {

                    console.log("Error when getting client - " + cpf + "-", err);
                    reject({ message: err.message, name: err.name });

                } else {
                    
                    if (data){
                        console.log("Client found!");
                        resolve(data);
                    } else {
                        console.log("Client not found");
                        reject({ message: "Client not found", name: "NotFound" });
                    }
                }
    
            })

        })

    }

    getAll(){

        return new Promise((resolve, reject) => {

            ClientModel.find({}, function(err, clients) {

                if (err){

                    reject({ message: err.message, name: err.name });

                } else{

                    
                    resolve(clients);
                }

            })            

        });

    }

}

module.exports = new GetDAO();