import produce from 'immer';
import { createReducer } from 'typesafe-actions';
import actionTypes from './types';

const initialState = {
    meetModal: false,
}

const appReducer = createReducer(
    initialState,
    {
        [actionTypes.OPEN_MEET_MODAL]: produce((draft, { payload }) => {
            draft['meetInfo'] = payload;
            draft['meetModal'] = true;
        }),
    }
)

export default appReducer