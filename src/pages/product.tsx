import React from 'react';
import { NextPageContext } from 'next';

import PageContainer from '@components/layout/Container';
import { PageWrapper } from '@components/common/Container';
import { PageHeader, HashHeader } from '@containers/Header';
import { ProductInformation } from '@containers/Product';

function ShowProductPage(props: any) {
    return (
        <PageWrapper>
            <PageHeader type='product' />
            <HashHeader />
            <ProductInformation />
        </PageWrapper>
    );
}

const ShowProductPageHoc = (props: any) => (
    <PageContainer title='허가네 농산품' description='건강한 유기농 농산품을 즐겨보세요.'>
        <ShowProductPage {...props} />
    </PageContainer>
);

ShowProductPageHoc.getInitialProps = async (ctx: NextPageContext) => {
    return {}
};

export default ShowProductPageHoc;
