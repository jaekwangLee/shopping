import React from 'react';
import styled from 'styled-components';

const ProductInfoContainer = styled.div`
    width: 100%;
    background-color: #ffffff;
    position: relative;
`;

const ProductInfoWrapper = styled.div`
    padding: 32px 24px;

    @media (max-width: 640px) {
        padding: 24px 16px;
    }
`;

export { ProductInfoContainer, ProductInfoWrapper }

const ProductImageWrapper = styled.div`
    width: 100%;
    margin-top: 8px;
    position: relative;
`;

const ProductImageThumbnail = styled.img`
    width: 100%;
    min-height: 230px;
    max-width: 100%;

    object-fit: cover;
    border: none;
    vertical-align: middle;
`;

const ProductShareAndPriceWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 12px;
`;

export { ProductImageWrapper, ProductImageThumbnail, ProductShareAndPriceWrapper }