const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
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
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newTextMessage: action.body
            };
        case SEND_MESSAGE:
            let text = state.newTextMessage;
            return {
                ...state,
                newTextMessage: '',
                messages: [...state.messages, {message: text}]
            };
        default:
            return state
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBody = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogReducer;