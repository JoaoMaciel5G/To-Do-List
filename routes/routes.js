const express = require("express")
const session = require("express-session")
const controlRouter = require("../controller/controller")
const router = express.Router()

router.route("/")
    .get(controlRouter.routeMain)
    .post(controlRouter.cadUser)

router.route("/login")
    .get(controlRouter.routeLogin)
    .post(controlRouter.verifyUserExists)

router.get("/create", controlRouter.routeCreateTask)

router.route("/todo")
    .get(controlRouter.routeTodo)

module.exports = router