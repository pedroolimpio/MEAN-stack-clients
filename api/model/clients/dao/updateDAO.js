var ClientModel = require("./model");

class UpdateDAO {

    constructor () {
        console.log("Constructed once of: " + this.constructor.name);
    }

    update(json){ 

        return new Promise((resolve, reject) => {

            ClientModel.findOne({ cpf: json.cpf }, function(err, data){

                if (err){
                    console.log("Error updating client - ", err);
                    reject({message: err.message, name: err.name});
                } else {

                    data.name = json.name;
                    data.email = json.email;
                    data.maritalStatus = json.maritalStatus,
                    data.address = json.address;
                    data.phones = json.phones;

                    data.save().then(res =>{ 
            
                        resolve({name: "OK", data: "Client successfully updated"});

                    }).catch(err => {
                        console.log("Error updating client during saving - ", err);
                        reject({message: err.message, name: err.name});
                    })

                }

            })

        });

    }

}

module.exports = new UpdateDAO();