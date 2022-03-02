import React from 'react';
import { NextPageContext } from 'next';

import PageContainer from '@components/layout/Container';
import { PageWrapper } from '@components/common/Container';

function SignupPage(props: any) {
    return (
        <PageWrapper>
            <h2>사용자 회원가입</h2>
        </PageWrapper>
    );
}

const SignupPageHoc = (props: any) => (
    <PageContainer title='허가네 농산품' description='건강한 유기농 농산품을 즐겨보세요.'>
        <SignupPage {...props} />
    </PageContainer>
);

SignupPageHoc.getInitialProps = async (ctx: NextPageContext) => {
    return {}
};

export default SignupPageHoc;
