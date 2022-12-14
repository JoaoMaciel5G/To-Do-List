const models = require("../model/db")
const { v4: uuidv4 } = require('uuid');

function routeTodo(request, response){ 
    if(!request.session.name){
        response.render("index")
    }else{
        request.session.id = uuidv4()
        response.render("todo")
    }
}
function routeMain(request, response){
    response.render("index")
}
function routeLogin(request, response){
    response.render("login")
}
function routeCreateTask(request, response){
    if(!request.session.name){
        response.render("index")
    }else{
        response.render("create")
    }
}

async function cadUser(request, response){
    try{
        const user = {
            first_name: request.body.firstName,
            last_name: request.body.lastName,
            email: request.body.email,
            password: request.body.passwd
        }
        const createUser = await models.create(user)
        request.session.name = user.first_name
        response.render("todo")
    }catch(error){
        console.log("deu erro")
    }
}

async function verifyUserExists(request, response){
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
    verifyUserExists,
    routeLogin,
    routeMain,
    routeCreateTask,
    routeTodo
}