import { IChat, IMessage } from '../src/pages/Chats/Chats.model'

export const getChatsData = (isCurrent: boolean): IChat[] => [
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
]

export const messagesData: IMessage[] = [
    {
        check: true,
        time: '11:57',
        text: `<p>Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.</p><p>Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.</p>`
    },
    {
        check: true,
        time: '12:56',
        text: `<p>Круто!</p>`,
        isOwn: true
    }
]
