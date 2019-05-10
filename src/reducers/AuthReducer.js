const INITIAL_STATE = {
    name: 'Axel',
    email: 'ajaxel@gmail.com',
    password: '123456',
    repeatPassword: '123456'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_NAME": return { ...state, name: action.payload }; break;
        case "SET_EMAIL": return { ...state, email: action.payload }; break;
        case "SET_PASSWORD": return { ...state, password: action.payload }; break;
        case "SET_REPEAT_PASSWORD": return { ...state, repeatPassword: action.payload }; break;
        default: break;
    }

    return state;
}