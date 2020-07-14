const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    messages: [
        {id: 0, message: 'Hi'},
        {id: 1, message: 'How r u?'},
        {id: 2, message: 'Ayayay'},
        {id: 3, message: 'hello'}
    ],
    dialogs: [
        {name: 'Polina', id: 1},
        {name: 'Oksana', id: 2},
        {name: 'Misha', id: 3},
        {name: 'Fedya', id: 4}
    ],
    newTextMessage: '',
    newNameMessage: 'Serg'
}

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let text = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {message: text}]
            };
        default:
            return state
    }
}
export const sendMessageCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})


export default dialogReducer;