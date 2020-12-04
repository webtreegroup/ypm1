export interface IChat {
    name: string
    lastMessage: string
    time: string
    unread?: number
    isOwnMessage?: boolean
    isCurrent?: boolean
}

export interface IMessage {
    time: string
    text: string
    check?: boolean
    isOwn?: boolean
}
