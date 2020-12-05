import { IInputControl } from '../../components/InputControl/InputControl.model'

export const PROFILE_FORM_CONTROLS: IInputControl[] = [
    { disabled: true, className: 'touched', value: 'pochta@yandex.ru', inputType: 'email', name: 'email', label: 'Почта',  },
    { disabled: true, className: 'touched', value: 'ivanivanov', name: 'login', label: 'Логин',  },
    { disabled: true, className: 'touched', value: 'Иван', name: 'first_name', label: 'Имя',  },
    { disabled: true, className: 'touched', value: 'Иванов', name: 'second_name', label: 'Фамилия',  },
    { disabled: true, className: 'touched', value: 'Иван', name: 'display_name', label: 'Имя в чате',  },
    { disabled: true, className: 'touched', value: '+7 (909) 967 30 30', name: 'phone', label: 'Телефон',  },
]