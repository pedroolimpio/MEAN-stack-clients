
class Get {

    constructor () {
        console.log("Constructed once of: " + this.constructor.name);
    }

    get(params) {

        return new Promise((resolve, reject) => {

            this.dao = require("./dao/getDAO");

            this.dao.get(params.cpf).then(res => {

                resolve({statusCode: 200, data: res});

            }).catch(err => {

                if (err.name == "ValidationError")
                    reject({statusCode: 400, error: err});
                else if (err.name == "NotFound")
                    reject({statusCode: 404, error: err});
                else 
                    reject({statusCode: 500, error: err});
                    
            });

        });

    }

    getAll(){

        return new Promise((resolve, reject) => {

            this.dao = require("./dao/getDAO");

            this.dao.getAll().then(res => {
                
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

module.exports = new Get();