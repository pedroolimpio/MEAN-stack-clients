class Update {

    constructor () {
        console.log("Constructed once of: " + this.constructor.name);
    }

    update(json) {

        return new Promise((resolve, reject) => {

            if (this.validateData(json)){

                this.dao = require("./dao/updateDAO");

                this.dao.update(json).then(res => {
                    resolve({statusCode: 200, data: res});
                }).catch(err => {

                    if (err.name == "ValidationError")
                        reject({statusCode: 400, error: err});
                    else 
                        reject({statusCode: 500, error: err});
                        
                });

            } else {
                reject({statusCode: 400, error: {message:"CPF must be filled at the body request", name: "ValidationError"}});
            }

        });

    }

    validateData(json) {

        return ((json.cpf != undefined) && (json.cpf != null));

    }


}

module.exports = new Update();