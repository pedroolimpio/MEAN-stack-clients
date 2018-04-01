class Create {

    constructor() {
        console.log("Constructed once of: " + this.constructor.name);
    }

    create(json) {

        return new Promise((resolve, reject) => {

            this.dao = require("./dao/createDAO");

            this.dao.create(json).then(res => {
                resolve({statusCode: 200, data: res});
            }).catch(err => {

                if ((err.name == "ValidationError") || ("BulkWriteError"))
                    reject({statusCode: 400, error: err});
                else 
                    reject({statusCode: 500, error: err});
                    
            });

        });

    }

}

module.exports = new Create();