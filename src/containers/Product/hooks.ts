import { ProductModel } from "@apis/product";
import { setProductInfo } from "@reducer/app/actions";
import { RootState } from "@reducer/index"
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"

export function useProductState() {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.app);

    const fetchItem = useCallback(async (item_no: string) => {
        const product = new ProductModel();
        const { data, status } = await product.fetchItemInfo(item_no);
        if (status === 'success') dispatch(setProductInfo(data));
    }, []);

    return { state: state.productInfo, dispatch, fetchItem }
}