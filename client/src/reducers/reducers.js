import { SET_PAGE_VALUE, TOGGLE_MODAL, LOAD_USER} from "../constants";

const initialStatePage = {
    page : window.location.pathname
}

export const changePage = (state= initialStatePage, action={}) => {
    switch(action.type){
        case SET_PAGE_VALUE:
            return Object.assign({}, state, {page: action.payload})
        default: 
            return state;
    }
}

const initialStateModal = {
    isModalOpen: 'none'
}

export const toggleModal = (state= initialStateModal, action={}) => {
    switch(action.type){
        case TOGGLE_MODAL:
            return Object.assign({}, state, {isModalOpen: action.payload})
        default: 
            return state;
    }
}

const initialStateUser = {
    user: {
        id: 0,
        name: '',
        email: '',
        password: ''
    }
}

export const setUserState = (state = initialStateUser, action={}) => {
    switch(action.type){
        case LOAD_USER:
            return Object.assign({}, state, {user: action.payload})
        default:
            return state;
    }
}