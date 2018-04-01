var DB = require("../../DB");

module.exports = new DB.mongoose.Schema({
    cpf: {
        type: String,
        trim: true,
        required: [true, "CPF is required"],
        unique : true,
        validate: {
            validator: function(cpf){

                var count;
                var rest;
                count = 0;

                const regex = /^\d{3}\d{3}\d{3}\d{2}$/; //verifying if there are any letters..

                var testCPF = regex.test(cpf);

                if (!testCPF)
                    return false;

                if (parseInt(cpf) == 0)
                    return false;

                for (var i = 1; i <= 9; i++)
                    count = count + parseInt(cpf.substring(i - 1, i)) * (11 - i);

                rest = (count * 10) % 11;

                if ((rest == 10) || (rest == 11))
                    rest = 0;
                if (rest != parseInt(cpf.substring(9, 10)))
                    return false;

                count = 0;
                for (var i = 1; i <= 10; i++)
                    count = count + parseInt(cpf.substring(i - 1, i)) * (12 - i);

                rest = (count * 10) % 11;

                if ((rest == 10) || (rest == 11))
                    rest = 0;
                if (rest != parseInt(cpf.substring(10, 11)))
                    return false;

                return true;
            },
            message: "{VALUE} - is invalid"
        }
    },
    name: {
        type: String,
        trim: true,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        trim: true,
        required: true,
        validate: {
            validator: function (v){
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);
            },
            message: "{VALUE} is not a valid email"
        }
    },
    maritalStatus: {
        type: Number,
        min: 0,
        max: 1,
        required: [true, "Marital status is required"]
    },
    address: {
        type: String,
        trim: true,
        required: [true, "Address is required"]
    },
    phones: {
        type: [String],
        required: [true, "Phone numbers are required"],
        validate: {
            validator: function(v){
                return v.length >= 1
            },
            message: "Must have at least one phone number"
        }
    }
}).index({name: 'text'})