class Delete {

    constructor() {
        console.log("Constructed once of: " + this.constructor.name);
    }

    delete(params) {

        return new Promise((resolve, reject) => {

            this.dao = require("./dao/deleteDAO");

            this.dao.delete(params.cpf).then(res => {

                resolve({statusCode: 200, data: res});

            }).catch(err => {

                if (err.name == "ValidationError")
                    reject({statusCode: 400, error: err});
                else 
                    reject({statusCode: 500, error: err});
                    
            });

        });

    }

}

module.exports = new Delete();