import produce from 'immer';
import { createReducer } from 'typesafe-actions';
import actionTypes from './types';

const initialState = {
    page: 0,
    mainList: [],
    pageEnd: false,
}

const mainReducer = createReducer(
    initialState,
    {
        [actionTypes.SET_MAIN_LIST_PAGE]: produce((draft, { payload }) => {
            draft['page'] = payload;
        }),
        [actionTypes.SET_MAIN_LIST_PAGE]: produce((draft, { payload }) => {
            draft['pageEnd'] = true;
        }),
        [actionTypes.ADD_LIST]: produce((draft, { payload }) => {
            if (payload && Array.isArray(payload) && payload.length > 0) {
                draft['mainList'] = draft['mainList'].concat(payload);
            }
        }),
    }
)

export default mainReducer