import { 
    SET_PAGE_VALUE, 
    TOGGLE_MODAL, 
    LOAD_USER, 
    FETCH_USER_PENDING,
    FETCH_USER_SUCCESS
} from "../constants";

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
        googleID: 0,
        name: 'John Doe',
        email: 'john@email.com',
        password:'',
        auth: 'no user',
    },
    isPending: false
}

export const fetchAndSetUser = (state = initialStateUser, action={}) => {
    console.log('reducing', action);
    switch(action.type){
        case FETCH_USER_PENDING: 
            return Object.assign({}, state, {isPending: true})
        case FETCH_USER_SUCCESS:
            return Object.assign({}, state, {user: action.payload, isPending: false})
        case LOAD_USER:
            return Object.assign({}, state, {user: action.payload, isPending: false})
        default:
            return state;
    }
}

