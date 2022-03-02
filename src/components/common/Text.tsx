import styled from 'styled-components';
import Pallete from '@utils/pallete';

export const SectionTitle = styled.h3`
    font-size: 24px;
    font-weight: bold;
    line-height: 32px;
    letter-spacing: -0.33px;

    margin-top: 0px;
    margin-bottom: 8px;
`;

export const SectionDescription = styled.h5`
    font-size: 12px;
    font-weight: bold;
    line-height: 18px;
    letter-spacing: -0.33px;
    color: ${ Pallete.dark80 };

    margin-top: 0px;
    margin-bottom: 8px;
`;

export const TxtButton = styled.span`
    font-size: 12px;
    font-weight: bold;
    line-height: 18px;
    color: ${ Pallete.dark80 };
    cursor: pointer;
    
    &:hover {
        transition: all 0.3s;
        color: ${ Pallete.green100 }
    }
`;

export const Txt16 = styled.p`
    font-size: 16px;
    line-height: 22px;
    letter-spacing: 0.33px;
    margin-bottom: 0px;

    ${({bold}: { bold?: boolean; }) => bold && 'font-weight: bold'}
`;

export const Txt14 = styled.p`
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 0px;
    letter-spacing: 0.33px;
    ${({bold}: { bold?: boolean; }) => bold && 'font-weight: bold'}
`;

export const Txt12 = styled.p`
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 0px;
    letter-spacing: 0.33px;
    ${({bold}: { bold?: boolean; }) => bold && 'font-weight: bold'}
`;

export const Txt10 = styled.p`
    font-size: 10px;
    line-height: 16px;
    margin-bottom: 0px;
    letter-spacing: 0.33px;
    ${({bold}: { bold?: boolean; }) => bold && 'font-weight: bold'}
`;

export const A12 = styled.a`
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 0px;
    letter-spacing: 0.33px;
    ${({bold}: { bold?: boolean; }) => bold && 'font-weight: bold'}
`;

export const Txt20 = styled.h3`
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 0px;
    letter-spacing: 0.33px;
    ${({bold}: { bold?: boolean; }) => bold && 'font-weight: bold'}
`;