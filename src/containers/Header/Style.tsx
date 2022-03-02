import React from 'react';
import styled, { CSSProperties } from 'styled-components';

const CommonStyles = {
    width: '1em',
    height: '1em',
    fontSize: '24px',
    cursor: 'pointer',
}

export const Icon = ({ IconComponent, onClick, style }: { IconComponent: any; onClick?: () => void; style?: CSSProperties  }) => (
    <IconComponent style={style ? { ...CommonStyles, ...style } : { ...CommonStyles }} onClick={onClick} />
)

export const PageHeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    height: 60px;
    padding-left: 12px;
    padding-right: 12px;

    @media (max-width: 640px) {
        height: 50px;
    }
`;

export const CategoryContainer = styled(PageHeaderContainer)`
    height: 44px;

    @media (max-width: 640px) {
        height: 40px;
    }
`;

export const CategoryWrapper = styled.div`
    height: 100%;
`;
    
export const CategoryTxt = styled.span`
    display: inline-block;
    height: 100%;
    line-height: 44px;
    font-weight: ${({ active }: { active?: boolean; }) => active ? 'bold' : 'normal'};
    cursor: pointer;

    margin-bottom: 0px;
    border-bottom: ${({ active }: { active?: boolean; }) => active ? '1.5px solid green' : 0};

    @media (max-width: 640px) {
        line-height: 40px;
    }
`;