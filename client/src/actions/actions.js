import { SET_PAGE_VALUE, TOGGLE_MODAL, LOAD_USER } from '../constants';

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