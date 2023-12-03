import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export interface ModalProps {
    isShown: boolean;
}

const ModalBalance: FunctionComponent<ModalProps> = ({ isShown }) => {
    const Modal = (
        <>
            <h2>modal</h2>
        </>
    );

    return isShown ? ReactDOM.createPortal(Modal, document.body) : null;
};

export default ModalBalance;
