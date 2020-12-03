const { getChatsData } = require('./static/js/mocks/chats.mock')

const express = require('express')

const app = express()
const PORT = 4000

app.set('view engine', 'pug')
app.set('views', './src')

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
        title: "Chats page",
        chatsData: getChatsData()
    })
})

app.get("/chats/:id", function(request, response){
    response.render("pages/ChatSingle", {
        title: "Chats page",
        chatsData: getChatsData(true),
        chatMessages: 'TODO'
    })
})

app.listen(PORT, () => {
    console.log(`Start in ${PORT}!`)
})