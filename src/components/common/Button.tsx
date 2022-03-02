import { Button } from 'antd';
import styled from 'styled-components';

export const StretchNormalButton = styled(Button)`
    width: 100%;
    height: 40px;
    border-radius: 4px;

    margin-top: 8px;
`;

export const SmallButton = styled(Button)`
    height: 34px;
    border-radius: 4px;
`;

export const BorderButton = styled.div`
    width: 100%;
    height: 44px;
    
    border-radius: 4px;
    border: 1px solid #191919;
    background-color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        background-color: #f7f7f7;
    }
`;