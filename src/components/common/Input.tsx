import { Input, Select } from 'antd';
import styled from 'styled-components';
import Pallete from '@utils/pallete';

const TipBoxInput = styled(Input)`
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 12px 16px;
    
    border: 2px solid ${ Pallete.dark10 };
    border-radius: 4px;

    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 22px;
    letter-spacing: -0.005em;
    color: ${ Pallete.dark90 };

    &::placeholder {
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 22px;
        letter-spacing: -0.005em;
        color: ${ Pallete.dark30 };
    }

    &.ant-input:hover {
        border: 2px solid ${ Pallete.dark10 } !important;
    }

    &.ant-input:focus,&.ant-input-focused {
        border: 2px solid ${ Pallete.dark10 } !important;
        box-shadow: none;
    }
`;

const TipBoxTextarea = styled(Input.TextArea)`
    width: 100%;
    padding: 12px 16px;

    resize: none;
    max-width: 300px;

    border: 2px solid ${ Pallete.dark10 };
    border-radius: 4px;

    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 22px;
    letter-spacing: -0.005em;
    color: ${ Pallete.dark90 };

    &::placeholder {
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 22px;
        letter-spacing: -0.005em;
        color: ${ Pallete.dark30 };
    }

    &.ant-input:hover {
        border: 2px solid ${ Pallete.dark10 } !important;
    }

    &.ant-input:focus,&.ant-input-focused {
        border: 2px solid ${ Pallete.dark10 } !important;
        box-shadow: none;
    }
`;

const TipBoxLabel = styled.label`
    display: block;
    text-align: left;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.005em;
    color: ${ Pallete.dark100 };

    margin-top: 8px;
    margin-bottom: 8px;

    @media (max-width: 480px) {
        font-size: 12px;
        line-height: 18px;

        margin-top: 4px;
        margin-bottom: 4px;
    }
`;

const TipBoxWarning = styled.p`
    margin-top: 4px;

    font-size: 12px;
    text-align: left;
    line-height: 17px;
    letter-spacing: -0.005em;
    color: red;
`;

const TipBoxSelect = styled(Select)`
    width: 100%;
    height: 40px;
    line-height: 40px;

    max-width: 300px;
    
    border: 2px solid ${ Pallete.dark10 };
    border-radius: 4px;
    
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 22px;
    letter-spacing: -0.005em;
    color: ${ Pallete.dark90 };
    
    > .ant-select-selector {
        border-radius: 8px !important;
        border: 0px !important;
        height: 100% !important;
        width: 100% !important;
        padding: 6px 16px !important;

        .ant-select-selection-item {
            height: 100% !important;
            // line-height: 50px;
        }
    }

    &::placeholder {
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 22px;
        letter-spacing: -0.005em;
        color: ${ Pallete.dark30 };
    }
`;


export {
    TipBoxInput,
    TipBoxTextarea,
    TipBoxLabel,
    TipBoxWarning,
    TipBoxSelect,
}