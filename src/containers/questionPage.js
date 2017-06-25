import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleQuestionModal, toggleConfirmation } from '../actions/questionActions';
import QuestionModal from '../components/questionModal';

class QuestionPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
    }


    openModal() {
        this.props.toggleQuestionModal(true);
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed. 
        // this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.props.toggleConfirmation(true);
    }

    render() {
        const { modalIsOpen } = this.props;
        return (
            <div>
                <QuestionModal modalIsOpen={modalIsOpen} openModal={this.openModal} closeModal={this.closeModal} 
                afterOpenModal={this.afterOpenModal} />
            </div>
        );
    }
}

QuestionPage.propTypes = {
    modalIsOpen: PropTypes.bool.isRequired,
    toggleQuestionModal: PropTypes.func.isRequired,
    toggleConfirmation: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        modalIsOpen: state.question.modalIsOpen
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleQuestionModal: bindActionCreators(toggleQuestionModal, dispatch),
        toggleConfirmation: bindActionCreators(toggleConfirmation, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);