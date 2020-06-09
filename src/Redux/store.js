import profileReducer from "./Profile-reducer";
import dialogReducer from "./Dialog-reducer";
import navReducer from "./Nav-reducer";


let store = {
    _state: {
        profilePage: {
            postData: [
                {message: 'Hello', id: 1, likesCount: '12'},
                {message: 'where r u?', id: 2, likesCount: '456'},
                {message: 'call me', id: 3, likesCount: '87'}

            ],
            newPostText: 'hello',
            profile: null
        },
        dialogsPage: {
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
        },
        nav: {
            navData: [
                {p: '/profile', class: 'classes.active', text: 'Profile'},
                {p: '/dialogs', class: 'classes.active', text: 'Messages'},
                {p: '/news', class: 'classes.active', text: 'News'},
                {p: '/music', class: 'classes.active', text: 'Music'},
                {p: '/settings', class: 'classes.active', text: 'Settings'}
            ],
            friend: [
                {name: ' Sasha', image: 'https://i.pinimg.com/originals/de/c0/5c/dec05c95bbb01637d923c964367ab854.jpg'},
                {name: ' Petya', image: 'https://pristor.ru/wp-content/uploads/2018/11/%D0%9F%D1%80%D0%B8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%B8-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D1%84%D0%BE%D1%82%D0%BE-Supreme-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-1.jpg'},
                {name: ' Gadjimurad', image: 'https://i1.wp.com/funpick.ru/wp-content/uploads/2018/02/ava-3.jpg?w=600'}
            ]
        }
    },

    _callSubscriber () {},

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._state.nav = navReducer(this._state.nav, action)
        this._callSubscriber(this._state)
        }
}









export default store;
window.store=store;