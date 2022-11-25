const models = require("../model/db")

async function cadUser(request, response){
    try{
        const user = {
            first_name: request.body.firstName,
            last_name: request.body.lastName,
            email: request.body.email,
            password: request.body.passwd
        }
        const createUser = await models.create(user)
        response.render("todo")
    }catch(error){
        console.log("deu erro")
    }
}
async function findUser(request, response){
    try{
        const email = request.body.email
        const password = request.body.passwd
        const findEmail = await models.findOne({email: email})
        const findPasswd = await models.findOne({password: password})
        if(findEmail && findPasswd){
            response.render("todo")
        }else{
            response.render("login-error")
        }
    }catch(error){
        console.log(error)
    }
}
module.exports = {
    cadUser,
    findUser
}