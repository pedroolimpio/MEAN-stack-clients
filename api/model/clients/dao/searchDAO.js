var ClientModel = require("./model");

class SearchDAO {

    constructor() {
        console.log("Constructed once of: " + this.constructor.name);
    }

    search(name) {

        return new Promise((resolve, reject) => {

            ClientModel.find({$text: {$search: name}}, function (err, clients) {

                if (err) {

                    console.log("Error when getting client - " + name + "-", err);
                    reject({ message: err.message, name: err.name });

                } else {
                    
                    if (err){

                        reject({ message: err.message, name: err.name });

                    } else {

                       // var clientMap = {};

                        if (clients.length > 0){
   
                            resolve(clients);

                        } else {
                            reject({ message: "Clients not found", name: "ValidationError" });
                        }

                    }
                }
    
            })

        })

    }
}

module.exports = new SearchDAO();