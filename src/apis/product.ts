import axios from '@libs/core/axios';

type Response = {
    status: 'failed' | 'success';
    data: any
}

export class ProductModel {
    public fetchItemList = async (page: number): Promise<Response> => {
        try {
            const list = new Array(100).fill(0).slice(page * 10, (page + 1) * 10).map((item, index) => ({
                item_no: `no_${ index}`,
                name: 'ITEMIC',
                photo: '',
                discountPer: index % 4 === 0 ? '50%' : 0,
                discountedPrice: index % 4 === 0 ? 500 : 0,
                price: 1000,
                isSale: index % 4 === 0,
                isNew: index % 5 === 0,
            }))
            return { status: 'success', data: list };
        } catch(error) {
            console.log('fetch list error: ', error);
            return { status: 'failed', data: 'error' };
        }
    }
}