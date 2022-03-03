import React, { useLayoutEffect } from 'react';
import InfiniteScroller from 'react-infinite-scroller';
import { useRouter } from 'next/router';

import { Carousel, ProductCard } from './index';
import { useItemListState } from './hooks';

const AllListController = () => {
    const { state, fetchList } = useItemListState();
    const route = useRouter();

    useLayoutEffect(() => {
        fetchList();
    }, []);

    const goProductPage = (item_no: string) => {
        route.push({
            pathname: 'product',
            query: {
                item_no
            }
        })
    }

    return (
        <AllList
            items={state.mainList}
            pageEnd={state.pageEnd}
            fetchMore={fetchList}
            goProduct={goProductPage}
        />
    )
}

export const AllEventController = () => {
    const events = [
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAxODA3MTZfMTc1%2FMDAxNTMxNzEzNjQ0ODI0.Rusg3DfN4IFwohENOnduuBNcFgIPpbTqp8ABa3RC95Ug.4l1ZjuD9nQzHl1ScN-pkNN-qfoLpjDiPcialrLxy8QQg.JPEG.persian0o0%2FE82CD459-5B1A-41C5-ADEC-F78D12DDCB86.jpeg&type=a340',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5656%2F2020%2F12%2F15%2F0000038403_001_20201215110027576.png&type=a340',
        'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA4MjlfMjAz%2FMDAxNTM1NTQ2MjQwNzI2.O-PIwmGawiwyNilTFV9oklMMSfX6vky80deey-fR0Xsg.84GtORnxB-ZK1cIgbC1lxs9Q9x7qhlL4uC8brTtoucwg.JPEG.dalpong2015%2F20180828_002201.jpg&type=a340',
    ]
    return (
        <Carousel items={events.map((src, index) => <img style={{ width: '100%', objectFit: 'cover' }} src={src} key={'event-banner-' + index} />)} />
    )
}

const AllList = ({ items, pageEnd, fetchMore, goProduct }: { items: Array<any>; pageEnd: boolean; fetchMore: () => void; goProduct: (no: string) => void; }) => {
    return (
        <>
            <InfiniteScroller
                pageStart={0}
                loadMore={fetchMore}
                hasMore={pageEnd}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}
            >
                { items.map((item, index) => (
                    <ProductCard 
                        key={item.item_no + '_key'} 
                        name={ item.name } 
                        price={ item.price }
                        image={ item.photo }
                        discountPer={ item.discountPer }
                        discountedPrice={ item.discountedPrice }
                        onPage={() => { goProduct(item.item_no); }}
                    />
                )) }
            </InfiniteScroller>
        </>
    )
}

export default AllListController