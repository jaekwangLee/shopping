import {createAction} from 'typesafe-actions';
import actionTypes from './types';


export const setPageNumber = createAction(actionTypes.SET_MAIN_LIST_PAGE, (page) => page)();
export const setPageEnd = createAction(actionTypes.SET_PAGE_END)();
export const addItemList = createAction(actionTypes.ADD_LIST, (items) => items)();

export type mainActions =
    | ReturnType<typeof setPageNumber>
    | ReturnType<typeof setPageEnd>
    | ReturnType<typeof addItemList>;
