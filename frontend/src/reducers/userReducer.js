import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_REQUEST,
    USER_LOGIN_FAIL,
    USER_LOGOUT
} from '../constatnts/userConstants'


export const userLoginReducer = (state={}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { login: true, products: [] }
        case USER_LOGIN_SUCCESS:
            return { login: false, products: action.payload }
        case USER_LOGIN_SUCCESS:
            return { login: false, error: action.payload}
    }
}