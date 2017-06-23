import * as types from './actionTypes';

export function toggleQuestionModal(isOpen) {
  return { type: types.TOGGLE_QUESTION_MODAL, payload: isOpen };
}

export function toggleConfirmation(isOpen) {
  return { type: types.TOGGLE_CONFIRMATION, payload: isOpen };
}