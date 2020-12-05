import { getChatsData, MESSAGES_DATA } from './src/pages/Chats/Chats.consts.js'
import { LOGIN_FORM_CONTROLS } from './src/pages/Login/Login.consts.js'
import { SIGNIN_FORM_CONTROLS } from './src/pages/Signin/Signin.consts.js'
import { PROFILE_FORM_CONTROLS } from './src/pages/Profile/Profile.consts.js'

import express from 'express'

const app: express.Application = express()
const PORT = 4000

app.set('view engine', 'pug')
app.set('views', './src')

app.use(express.static('./'))

app.get("/login", function(_request, response){
    response.status(200).render("pages/Login/Login", {
        title: "Вход",
        fields: LOGIN_FORM_CONTROLS
    })
})

app.get("/signin", function(_request, response){
    response.status(200).render("pages/Signin/Signin", {
        title: "Авторизация",
        fields: SIGNIN_FORM_CONTROLS
    })
})

/**
 * TODO: стр. "Чаты" и "Поиск чатов" по сути одно и тоже,
 * необходимо сделать ручку для POST поискового метода,
 * при получении данных мы будем делать ререндер списка чатов
 */
app.get("/chats", function(_request, response){
    response.status(200).render("pages/Chats/Chats", {
        title: "Чаты",
        chatsData: getChatsData()
    })
})

app.get("/chats/:id", function(_request, response){
    response.status(200).render("pages/Chats/Chats", {
        title: "Текущий чат",
        chatsData: getChatsData(true),
        MESSAGES_DATA
    })
})

app.get("/profile", function(_request, response){
    response.status(200).render("pages/Profile/Profile", {
        title: "Профиль пользователя",
        fields: PROFILE_FORM_CONTROLS
    })
})

/**
 * TODO: стр. "404" и "500" будут отображаться одним и тем же шаблоном
 */
app.use(function(_request, response){
    response.status(404).render('pages/Error')
})

app.listen(PORT, () => {
    console.log(`Start in ${PORT}!`)
})

