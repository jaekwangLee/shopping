import React from 'react';
import { NextPageContext } from 'next';

import PageContainer from '@components/layout/Container';
import { PageWrapper } from '@components/common/Container';

function ShoppingCartPage(props: any) {
    return (
        <PageWrapper>
            <h2>장바구니 - </h2>
        </PageWrapper>
    );
}

const ShoppingCartPageHoc = (props: any) => (
    <PageContainer title='허가네 농산품' description='건강한 유기농 농산품을 즐겨보세요.'>
        <ShoppingCartPage {...props} />
    </PageContainer>
);

ShoppingCartPageHoc.getInitialProps = async (ctx: NextPageContext) => {
    return {}
};

export default ShoppingCartPageHoc;
