import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductModel } from '@apis/product';
import { RootState } from '@reducer/index';
import { addItemList, setPageEnd, setPageNumber } from '@reducer/main/actions';

export function useItemListState() {
    const state = useSelector((state: RootState) => state.main);
    const dispatch = useDispatch();

    const fetchList = useCallback(async () => {
        const product = new ProductModel();
        const { data, status } = await product.fetchItemList(state.page);
        if (status === 'success' && data &&  data.length > 0) {
            dispatch(setPageNumber(state.page + 1));
            dispatch(addItemList(data));
        } else {
            dispatch(setPageEnd())
        }
    }, [state.page]);

    return { state, fetchList }
}