const mongoose = require("mongoose"),
bcrypt = require("bcryptjs"),
Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        trim:true,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    wallets:[{
        type:String,
        address:String,
        walletType:String,
        coins:[{
            type:String,
            symbol:String,
            amnt:Number,
        }]
    }],
    created:{
        type:Date,
        default:Date.now
    }
});

userSchema.methods.isValidPassword = function(typedPassword){
    return bcrypt.compareSync(typedPassword, this.password);
};
userSchema.methods.encryptPassword = function(typedPassword){
    return bcrypt.hashSync(typedPassword,10);
}

module.exports = mongoose.model("User",userSchema);