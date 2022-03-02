import React from 'react';
import { NextPageContext } from 'next';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PageContainer from '@components/layout/Container';
import { PageWrapper } from '@components/common/Container';
import { PageHeader, HeaderCategory } from '@containers/Header';

function MainPage(props: any) {
    return (
        <PageWrapper>
            <PageHeader type='default' />
            <HeaderCategory />
            <h2>메인 페이지</h2>
        </PageWrapper>
    );
}

const MainPageHoc = (props: any) => (
    <PageContainer title='허가네 농산품' description='건강한 유기농 농산품을 즐겨보세요.'>
        <MainPage {...props} />
    </PageContainer>
);

MainPageHoc.getInitialProps = async (ctx: NextPageContext) => {
    // const { data } = await axiosWithCookie(ctx, {
    //     method: 'post',
    //     url: '/user/list/filter',
    // });

    // if (data && data.status === 'success') {
    //     return { list: data.data };
    // } else {
    //     return { list: [] };
    // }
    return {}
};

export default MainPageHoc;
