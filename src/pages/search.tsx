import React from 'react';
import { NextPageContext } from 'next';

import PageContainer from '@components/layout/Container';
import { PageWrapper } from '@components/common/Container';

function SearchProductPage(props: any) {
    return (
        <PageWrapper>
            <h2>상품 검색 - </h2>
        </PageWrapper>
    );
}

const SearchProductPageHoc = (props: any) => (
    <PageContainer title='허가네 농산품' description='건강한 유기농 농산품을 즐겨보세요.'>
        <SearchProductPage {...props} />
    </PageContainer>
);

SearchProductPageHoc.getInitialProps = async (ctx: NextPageContext) => {
    return {}
};

export default SearchProductPageHoc;
