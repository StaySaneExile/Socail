let initialState = {
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

const navReducer = (state = initialState, action) => {

    return state
}
export default navReducer;