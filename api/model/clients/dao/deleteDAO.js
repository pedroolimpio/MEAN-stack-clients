var ClientModel = require("./model");

class DeleteDAO {

    constructor () { 
        console.log("Constructed once of: " + this.constructor.name);
    }

    delete(cpf){

        return new Promise((resolve, reject) => {

            ClientModel.remove({cpf: cpf}, function (err) {

                if (err){
                    console.log("Error deleting client - ", err);
                    reject({message: err.message, name: err.name});
                } else {
                    console.log("Client successfully deleted. ");
                    resolve({message: "Client successfully deleted.", name: "OK"});
                }

            });

        });

    }

}

//The object is created once. Node can manage a single instance of the object
module.exports = new DeleteDAO();