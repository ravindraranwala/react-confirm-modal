import * as types from '../actions/actionTypes';
import initialState from './initialState';
export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_QUESTION_MODAL:
      return {modalIsOpen: action.payload};

    case types.TOGGLE_CONFIRMATION:
      return {confirmationIsOpen: action.payload};
      
    default:
      return state;
  }
}
