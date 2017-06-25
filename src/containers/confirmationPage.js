import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleConfirmation, toggleQuestionModal } from '../actions/questionActions';
import ConfirmationModal from '../components/confirmationModal';

class ConfirmationPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.onSuccessClick = this.onSuccessClick.bind(this);
        this.onCancelClick = this.onCancelClick.bind(this);
    }

    onSuccessClick() {
        this.props.toggleConfirmation(false);
        this.props.toggleQuestionModal(false)
    }

    onCancelClick() {
        this.props.toggleConfirmation(false);
    }

    render() {
        const { confirmationIsOpen } = this.props;
        let footerVisible = true;
        return(
            <ConfirmationModal confirmationIsOpen={confirmationIsOpen} onSuccessClick={this.onSuccessClick}
                onCancelClick={this.onCancelClick} bodyText="Are you sure you want to delete this?"
                saveButtonTxt="Yes" cancelButtonTxt="No" footerVisible headerTitle=""  
            />
        );
    }
}

ConfirmationPage.propTypes = {
    confirmationIsOpen: PropTypes.bool.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleQuestionModal: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        confirmationIsOpen: state.question.confirmationIsOpen
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleConfirmation: bindActionCreators(toggleConfirmation, dispatch),
        toggleQuestionModal: bindActionCreators(toggleQuestionModal, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationPage);