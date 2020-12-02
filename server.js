const express = require('express')

const app = express()
const PORT = 4000

app.set('view engine', 'pug')

app.use(express.static(`${__dirname}/static`))

app.get("/login", function(request, response){
    response.render("pages/login", {
        title: "login page"
    })
})

app.get("/signin", function(request, response){
    response.render("pages/signin", {
        title: "signin page"
    })
})

app.listen(PORT, () => {
    console.log(`Start in ${PORT}!`)
})