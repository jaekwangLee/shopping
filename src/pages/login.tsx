import React from 'react';
import { NextPageContext } from 'next';

import PageContainer from '@components/layout/Container';
import { PageWrapper } from '@components/common/Container';

function LoginPage(props: any) {
    return (
        <PageWrapper>
            <h2>사용자 로그인</h2>
        </PageWrapper>
    );
}

const LoginPageHoc = (props: any) => (
    <PageContainer title='허가네 농산품' description='건강한 유기농 농산품을 즐겨보세요.'>
        <LoginPage {...props} />
    </PageContainer>
);

LoginPageHoc.getInitialProps = async (ctx: NextPageContext) => {
    return {}
};

export default LoginPageHoc;
