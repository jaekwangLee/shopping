import react, { ReactNode } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        inset: 'unset',
        border: 0,
        width: '100vw',
        height: 'auto',
        marginTop: '64px',
        display: 'flex',
        background: 'transparent',
        justifyContent: 'center',
        zIndex: 9999
    },
};

export const PitchitModal = ({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: ReactNode; }) => {
    return (
        <Modal 
            isOpen={isOpen} 
            style={customStyles}
            shouldCloseOnEsc
            shouldCloseOnOverlayClick={false}
            onRequestClose={() => { onClose(); }}
        >
            <Container>
                { children }
                <CloseButton 
                    src='/images/close.png'
                    alt='닫기 버튼'
                    onClick={onClose} 
                />
            </Container>
        </Modal>
    );
};

const Container = styled.div`
    width: 100%;
    max-width: 480px;
    min-height: 240px;
    border-radius: 24px;
    background-color: #ffffff;
    box-shadow: 4px 4px 16px #ececec;

    position: relative;
    padding: 24px;
`;

const CloseButton = styled.img`
    cursor: pointer;
    width: 36px;
    height: 36px;

    position: absolute;
    top: 12px;
    right: 12px;
`;