const { getChatsData, messagesData } = require('./static/js/mocks/chats.mock')

const express = require('express')

const app = express()
const PORT = 4000

app.set('view engine', 'pug')
app.set('views', './src')

app.use(express.static(`${__dirname}/static`))

app.get("/login", function(request, response){
    response.render("pages/Login", {
        title: "Вход"
    })
})

app.get("/signin", function(request, response){
    response.render("pages/Signin", {
        title: "Авторизация"
    })
})

/**
 * TODO: стр. "Чаты" и "Поиск чатов" по сути одно и тоже,
 * необходимо сделать ручку для POST поискового метода,
 * при получении данных мы будем делать ререндер списка чатов
 */
app.get("/chats", function(request, response){
    response.render("pages/Chats/Chats", {
        title: "Чаты",
        chatsData: getChatsData()
    })
})

app.get("/chats/:id", function(request, response){
    response.render("pages/Chats/Chats", {
        title: "Текущий чат",
        chatsData: getChatsData(true),
        messagesData
    })
})

/**
 * TODO: стр. "404" и "500" будут отображаться одним и тем же шаблоном
 */
app.get("*", function(request, response){
    res.status(404).render("pages/Error", {
        title: "Страница не найдена",
    })
})

app.listen(PORT, () => {
    console.log(`Start in ${PORT}!`)
})