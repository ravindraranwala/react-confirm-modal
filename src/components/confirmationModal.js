import React, { Component, PropTypes } from 'react';
import { Modal } from '@pearson-components/modal';

const ConfirmationModal = ({confirmationIsOpen, onSuccessClick, onCancelClick, bodyText, saveButtonTxt,
    cancelButtonTxt, closeButtonSRText, footerVisible, headerTitle}) => {
    const text = {
      headerTitle: headerTitle,
      bodyText: bodyText,
      closeButtonSRText: closeButtonSRText,
      modalSaveButtonText: saveButtonTxt,
      modalCancelButtonText: cancelButtonTxt
    };
    
    return (
        <div>
            <Modal isShown={confirmationIsOpen} text={text} footerVisible
                cancelBtnHandler={onCancelClick} successBtnHandler={onSuccessClick} >{bodyText}</Modal>
        </div>
    );
};

ConfirmationModal.propTypes = {
    confirmationIsOpen: PropTypes.bool.isRequired,
    onSuccessClick: PropTypes.func.isRequired,
    onCancelClick: PropTypes.func.isRequired,
    bodyText: PropTypes.string.isRequired,
    saveButtonTxt: PropTypes.string.isRequired,
    cancelButtonTxt: PropTypes.string.isRequired,
    closeButtonSRText: PropTypes.string,
    footerVisible: PropTypes.bool.isRequired,
    headerTitle: PropTypes.string.isRequired
};

export default ConfirmationModal;