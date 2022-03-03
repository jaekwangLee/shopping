import React, { useCallback } from 'react';
import { SearchOutlined, UserOutlined, ShoppingCartOutlined, HomeOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router';

import { FlexOne } from '@components/common/Container';
import { Txt16 } from '@components/common/Text';
import { Icon, PageHeaderContainer } from './Style';

const DefaultPageHeaderController = ({ type }: { type: 'default' | 'product'; }) => {
    const route = useRouter();

    const goHome = useCallback(() => {
        route.push('/');
    } ,[])

    const goCart = useCallback(() => {
        route.push('/cart');
    } ,[])

    const goBack = useCallback(() => {
        route.back();
    }, [])

    if (!type || type === 'default') {
        return (
            <DefaultPageHeader
                goHome={goHome} 
                goCart={goCart}
            />
        )
    } else if (type === 'product') {
        return (
            <ProductPageHeader 
                goHome={goHome} 
                goCart={goCart}
                goBack={goBack}
            />
        )
    }

    return <></>
}

const DefaultPageHeader = ({ goHome, goCart }: { goHome: () => void; goCart: () => void; }) => (
    <PageHeaderContainer>
        <Icon IconComponent={SearchOutlined} />
        <FlexOne>
            <Txt16 style={{ cursor: 'pointer' }} onClick={goHome}><b>허가네</b>농산품</Txt16>
        </FlexOne>
        <>
            <Icon IconComponent={UserOutlined} style={{ marginRight: '8px' }} />
            <Icon IconComponent={ShoppingCartOutlined} onClick={goCart} />
        </>
    </PageHeaderContainer>
);

const ProductPageHeader = ({ goHome, goCart, goBack }: { goHome: () => void; goCart: () => void; goBack: () => void; }) => (
    <PageHeaderContainer>
        <Icon IconComponent={ArrowLeftOutlined} onClick={goBack} />
        <FlexOne>
            <Txt16><b>상품 정보</b></Txt16>
        </FlexOne>
        <>
            <Icon IconComponent={HomeOutlined} onClick={goHome} style={{ marginRight: '8px' }} />
            <Icon IconComponent={ShoppingCartOutlined} onClick={goCart} />
        </>
    </PageHeaderContainer>
);

export default DefaultPageHeaderController