import {createAction} from 'typesafe-actions';
import actionTypes from './types';


export const setProductInfo = createAction(actionTypes.SET_PRODUCT_INFO, (info) => info)();

export type appActions =
    | ReturnType<typeof setProductInfo>;
