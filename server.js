const express = require('express')

const app = express()
const PORT = 4000

app.set('view engine', 'pug')

app.use(express.static(`${__dirname}/static`))

app.get("/login", function(request, response){
    response.render("pages/Login", {
        title: "Login page"
    })
})

app.get("/signin", function(request, response){
    response.render("pages/Signin", {
        title: "Signin page"
    })
})

app.get("/chats", function(request, response){
    response.render("pages/Chats", {
        title: "Chats page"
    })
})

app.listen(PORT, () => {
    console.log(`Start in ${PORT}!`)
})