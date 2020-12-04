"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chats_mock_1 = require("./mocks/chats.mock");
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var PORT = 4000;
app.set('view engine', 'pug');
app.set('views', './src');
app.use(express_1.default.static(__dirname + "/static"));
app.get("/login", function (request, response) {
    console.log(request);
    response.render("pages/Login", {
        title: "Вход"
    });
});
app.get("/signin", function (request, response) {
    console.log(request);
    response.render("pages/Signin", {
        title: "Авторизация"
    });
});
/**
 * TODO: стр. "Чаты" и "Поиск чатов" по сути одно и тоже,
 * необходимо сделать ручку для POST поискового метода,
 * при получении данных мы будем делать ререндер списка чатов
 */
app.get("/chats", function (request, response) {
    console.log(request);
    response.render("pages/Chats/Chats", {
        title: "Чаты",
        chatsData: chats_mock_1.getChatsData()
    });
});
app.get("/chats/:id", function (request, response) {
    console.log(request);
    response.render("pages/Chats/Chats", {
        title: "Текущий чат",
        chatsData: chats_mock_1.getChatsData(true),
        messagesData: chats_mock_1.messagesData
    });
});
/**
 * TODO: стр. "404" и "500" будут отображаться одним и тем же шаблоном
 */
app.get("*", function (request, response) {
    console.log(request);
    response.status(404).render("pages/Error", {
        title: "Страница не найдена",
    });
});
app.listen(PORT, function () {
    console.log("Start in " + PORT + "!");
});
//# sourceMappingURL=server.js.map