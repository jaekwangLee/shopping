import React from 'react';
import { NextPageContext } from 'next';

import PageContainer from '@components/layout/Container';
import { PageWrapper } from '@components/common/Container';
import { PageHeader, HeaderCategory } from '@containers/Header';

function ProductCategoryPage(props: any) {
    return (
        <PageWrapper>
            <PageHeader type='default' />
            <HeaderCategory />
            <h2>상품 카테고리 - </h2>
        </PageWrapper>
    );
}

const ProductCategoryPageHoc = (props: any) => (
    <PageContainer title='허가네 농산품' description='건강한 유기농 농산품을 즐겨보세요.'>
        <ProductCategoryPage {...props} />
    </PageContainer>
);

ProductCategoryPageHoc.getInitialProps = async (ctx: NextPageContext) => {
    return {}
};

export default ProductCategoryPageHoc;
