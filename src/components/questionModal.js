import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';
import TinyMCE from 'react-tinymce';

const QuestionModal = ({ modalIsOpen, openModal, closeModal, afterOpenModal }) => {
  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },

    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      height: '50%',
      width: '80%',
      transform: 'translate(-50%, -50%)'
    }
  };

 const  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

  const getApplicationNode = () => {
    return document.getElementById('app');
  };

  Modal.setAppElement(getApplicationNode());

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Create A Question"
        role="dialog"
      >

        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <TinyMCE
            content="<p>This is the initial content of the editor</p>"
            config={{
              plugins: 'link image code',
              toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
            }}
            onChange={handleEditorChange}
           />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
};

QuestionModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  afterOpenModal: PropTypes.func.isRequired
};

export default QuestionModal;