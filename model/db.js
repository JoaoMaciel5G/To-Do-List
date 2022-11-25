const mongoose = require("mongoose")
require("dotenv").config()
const user = process.env.USER
const passwd = process.env.PASSWORD

mongoose.connect(`mongodb+srv://${user}:${passwd}@cluster0.upbrfs0.mongodb.net/?retryWrites=true&w=majority`)
    .then(()=>{
        console.log("CONNECT IN DATABASE")
    }).catch((err)=>{
        console.log(err)
    })

const usr = mongoose.model("users", {
    first_name: String,
    last_name: String,
    email: String,
    password: String
})

module.exports = usr