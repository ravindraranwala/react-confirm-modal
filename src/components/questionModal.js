import React, { Component, PropTypes } from 'react';
import Modal from 'react-modal';
import Tinymce from 'uxcore-tinymce';
import { uploadImage } from '../utils/imageUploader';

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

const handleKeyUp = (e, editor) => {
    console.log(editor.getContent());
}

const handleChange = (e, editor) => {
    console.log(editor.getContent());
}

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
           <Tinymce onKeyUp={handleKeyUp}
          content="<p>This is the initial content of the editor</p>"
            config={{
              plugins: 'link image code',
              menubar: false,
              toolbar1: 'undo image',
              file_picker_types: 'image',
              // enables drag and drop with paste capabilities.
              paste_data_images: true,
              // and here's our custom image picker
              file_picker_callback: function (cb, value, meta) {
                const input = document.createElement('input')
                input.setAttribute('type', 'file')
                input.setAttribute('accept', 'image/*')
                // Note: In modern browsers input[type="file"] is functional without
                // even adding it to the DOM, but that might not be the case in some older
                // or quirky browsers like IE, so you might want to add it to the DOM
                // just in case, and visually hide it. And do not forget do remove it
                // once you do not need it anymore.

                input.onchange = function () {
                  const file = this.files[0]
                  console.log('File is picked up !')
                  const reader = new FileReader()
                  reader.readAsDataURL(file)
                  reader.onload = function () {
                    // Note: Now we need to register the blob in TinyMCEs image blob
                    // registry. In the next release this part hopefully won't be
                    // necessary, as we are looking to handle it internally.
                    const id = 'blobid' + (new Date()).getTime()
                    const blobCache = window.tinymce.activeEditor.editorUpload.blobCache
                    const base64 = reader.result.split(',')[1]
                    const blobInfo = blobCache.create(id, file, base64)
                    blobCache.add(blobInfo)

                    // call the callback and populate the Title field with the file name
                    cb(blobInfo.blobUri(), { title: file.name })
                  }
                }
                input.click()
              },
              images_upload_handler: (blobInfo, success, failure) => {
                if (!blobInfo.filename().match(/gif|png|jpe?g/i)) {
                  failure('File is not an image.')
                  return false;
                } else {
                  // Call the action here, get the response url and set the publicUrl to the success here.
                  console.log('Uploading image !')
                  uploadImage(blobInfo.blob(), blobInfo.filename()).then(response => response.json()).then(jsonResponse => {
                    success(jsonResponse.availableFormats[0].href)
                  }).catch(e => { throw e })

                  return true;
                }
              }
            }}
            onChange={handleEditorChange}/>
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