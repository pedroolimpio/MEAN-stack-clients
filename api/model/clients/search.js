class Search {

    constructor () {
        console.log("Constructed once of: " + this.constructor.name);
    }

    search(params) {

        return new Promise((resolve, reject) => {

            this.dao = require("./dao/searchDAO");

            this.dao.search(params.name).then(res => {

                resolve({statusCode: 200, data: res});

            }).catch(err => {

                if (err.name == "ValidationError")
                    reject({statusCode: 400, error: err});
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

module.exports = new Search();