import styled from 'styled-components';

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: none;
    border: 0px;
    background-color: #ffffff;
    overflow: hidden;
    cursor: pointer;
`;

const ItemImageWrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    overflow: hidden;
    transform: translate3d(0px, 0px, 0px);
    border-radius: 12px;

    &::before {
        width: 100%;
        display: block;
        content: '';
        padding-bottom: 290px;
    }
`;

const ItemImageCard = styled.div`
    position: absolute;
    z-index: 1;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
`;

const ItemBgImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${({ src }: { src?: string}) => `url(${src})` || 'transparent'};
    opacity: 0;
    transition: opacity 300ms ease 0s;
    ${({ src }: { src?: string}) => src ? 'opacity: 1;' : ''}
`;

const ContentContainer = styled.div`
    padding-top: 12px;
    background-color: #ffffff;
`;

const ContentDiscountPercent = styled.span`
    color: green;
    font-weight: bold;
`;

const ContentDiscountOriginPrice = styled.span`
    text-decoration: line-through;
    color: gray;
    margin-left: 4px;
`;

const ContentPriceUnit = styled.span`
    line-height: 30px;
    font-size: 11px;
`;

export { ItemContainer, ItemImageWrapper, ItemImageCard, ItemBgImage, ContentContainer, ContentDiscountPercent, ContentDiscountOriginPrice, ContentPriceUnit }

const EventSliderContainer = styled.div`
    width: 100%;
    height: 440px;
    overflow: hidden;
    margin-top: 12px;
    margin-bottom: 12px;
    border-radius: 20px;
`;

export { EventSliderContainer }