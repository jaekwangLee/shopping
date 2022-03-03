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
                photo: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140717_90%2Fjulian1366_14055529390144dAAh_JPEG%2F6969e0890c2b9f80db71a8ab2779e52f.jpg&type=a340',
                discountPer: index % 4 === 0 ? 50 : 0,
                discountedPrice: index % 4 === 0 ? (100 * (index + 1))/2 : 0,
                price: 100 * (index + 1),
                isSale: index % 4 === 0,
                isNew: index % 5 === 0,
                description: 'THIS IS SPARTA. (JUST SAMPLE)'
            }))
            return { status: 'success', data: list };
        } catch(error) {
            console.log('fetch list error: ', error);
            return { status: 'failed', data: 'error' };
        }
    }

    public fetchItemInfo = async (item_no: string): Promise<Response> => {
        try {
            const info = {
                item_no,
                name: 'ITEMIC',
                photo: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140717_90%2Fjulian1366_14055529390144dAAh_JPEG%2F6969e0890c2b9f80db71a8ab2779e52f.jpg&type=a340',
                discountPer: 50,
                discountedPrice: 500,
                price: 1000,
                isSale: false,
                isNew: false,
                description: 'THIS IS SPARTA. (JUST SAMPLE)'
            };
            
            return { status: 'success', data: info };
        } catch(error) {
            console.log('fetch info error: ', error);
            return { status: 'failed', data: 'error' };
        }
    }
}