import React from 'react';
import { useItemListState } from './hooks';

const AllListController = () => {
    const { state, fetchList } = useItemListState();

    return (
        <AllList
            fetchMore={fetchList}
            items={state.mainList}
        />
    )
}

const AllList = ({ items, fetchMore }: { items: Array<any>; fetchMore: () => void; }) => {
    return (
        <>
        </>
    )
}

export default AllListController