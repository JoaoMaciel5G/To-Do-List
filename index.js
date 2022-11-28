const express = require("express")
const session = require("express-session")
const routes = require("./routes/routes")
const app = express()

app.use(session({secret: process.env.SECRET_KEY, resave: true, saveUninitialized: true}))
app.use("/public", express.static(__dirname + "/public"))
app.use(express.urlencoded({extended: true}))
app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")
app.set("views", __dirname + "/views")

app.use(routes)

app.listen(process.env.PORT || 5000)