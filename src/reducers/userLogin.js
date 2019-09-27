

const initialState = {
    userName: '',
    email: '', 
    id: '', 
    phoneNumber: '',
}

export default function userLogin(state = initialState, action) {
    switch(action, type) {
        case 'GET_USER_DATA':
            return state;
        // case 'LOGIN':
        // case 'LOGOUT':
        default:
            return state; 
    }
}