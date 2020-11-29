import { createStore, combineReducers } from 'redux'

export const LOGIN = 'LOGIN'
const userReducer = (userState = null, action) => {
    return action.type === LOGIN ? action.payload : userState
}

export const DATA_LOAD = 'DATA_LOAD'
const dataReducer = (dataState = {}, action) => {
    return action.type === DATA_LOAD ? action.payload : dataState
}


export const store = createStore(combineReducers({user: userReducer, data: dataReducer}), {})
