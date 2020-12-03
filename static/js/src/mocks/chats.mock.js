"use strict";
var getChatsData = function (isCurrent) { return [
    {
        name: 'Андрей',
        lastMessage: 'И Human Interface Guidelines и Material Design рекомендуют...',
        time: '10:49',
        unread: 4
    },
    {
        name: 'Вадим',
        lastMessage: 'Круто!',
        time: 'Пт',
        isOwnMessage: true,
        isCurrent: isCurrent
    },
    {
        name: 'Day.',
        lastMessage: 'Так увлёкся работой по курсу, что совсем забыл его анонсир...',
        time: '1 Мая 2020',
        unread: 100,
    },
]; };
module.exports = { getChatsData: getChatsData };
//# sourceMappingURL=chats.mock.js.map