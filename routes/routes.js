const { request, response } = require("express")
const express = require("express")
const session = require("express-session")
const {cadUser, findUser} = require("../controller/controller")
const router = express.Router()

router.get("/", (request, response)=>{
    response.render("index")
})
router.post("/", cadUser)
router.get("/login", (request, response)=>{
    response.render("login")
})
router.post("/login", findUser)

module.exports = router