import { 
    SET_PAGE_VALUE, 
    TOGGLE_MODAL, 
    LOAD_USER, 
    FETCH_USER_FAILED, 
    FETCH_USER_PENDING, 
    FETCH_USER_SUCCESS 
} from '../constants';

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

export const fetchAndSetUser = () => (dispatch) => {
    console.log('fetchin')
    dispatch({type: FETCH_USER_PENDING })
    axios.get('/api/api/current_user')
        .then(res => dispatch({ type: FETCH_USER_SUCCESS, payload: res.data }))
        .catch( err => dispatch({ type: FETCH_USER_FAILED, payload: err }))

}