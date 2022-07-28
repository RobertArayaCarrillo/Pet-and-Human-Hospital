const {default: cosmos} = require("@azure/cosmos");

const userSchema = new cosmos.Schema({
    id:{
        type:String,
        required:false, 
    },

    name:{
        type:String,
        required:false, 
    },

    edad:{
        type:String,
        required:false, 
    },

    problema:{
        type:String,
        required:false, 
    },

    servicio:{
        type:String,
        required:false, 
    },

    costo:{
        type:String,
        required:false, 
    },

    pagado:{
        type:String,
        required:false, 
    }
});

const userModel = cosmos.model("registro",userSchema)
module.exports = userModel