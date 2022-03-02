import React, { useCallback } from 'react';
import { SearchOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router';

import { FlexOne } from '@components/common/Container';
import { Txt16 } from '@components/common/Text';
import { Icon, PageHeaderContainer } from './Style';

const DefaultPageHeaderController = ({ type }: { type: 'default'; }) => {
    const route = useRouter();

    const goHome = useCallback(() => {
        route.push('/');
    } ,[])

    const goCart = useCallback(() => {
        route.push('/cart');
    } ,[])

    if (!type || type === 'default') {
        return (
            <DefaultPageHeader
                goHome={goHome} 
                goCart={goCart}
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
)
export default DefaultPageHeaderController