import produce from 'immer';
import { createReducer } from 'typesafe-actions';
import actionTypes from './types';

type AppStateTypes = {
    productInfo: {
        name: string;
        price: number;
        description: string;
        html: string;
        photo? : string;
        discountedPrice?: number;
        discountPer?: number;
    } | null;
}

const initialState: AppStateTypes = {
    productInfo: null,
}

const appReducer = createReducer(
    initialState,
    {
        [actionTypes.SET_PRODUCT_INFO]: produce((draft, { payload }) => {
            draft['productInfo'] = payload;
        }),
    }
)

export default appReducer