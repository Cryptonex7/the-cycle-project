import { SET_PAGE_VALUE, TOGGLE_MODAL, LOAD_USER, FETCH_USER } from '../constants';
import axios from 'axios';

export const setPage = (page) => ({
    type: SET_PAGE_VALUE,
    payload: page
})

export const toggleModalState = (isModalOpen) => ({
    type: TOGGLE_MODAL,
    payload: isModalOpen
})

export const loadUser = (user) => ({
    type: LOAD_USER,
    payload: user
})

export const fetchUser = (type) => {
    return function(dispatch){
        console.log('fetchin')
        axios.get('/api/current_user')
            .then(res => dispatch( {type: type, payload: res.data }))

    }

}