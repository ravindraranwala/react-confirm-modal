import * as types from '../actions/actionTypes';
import initialState from './initialState';
export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_QUESTION_MODAL:
      return { ...state, ['modalIsOpen']: action.payload };

    case types.TOGGLE_CONFIRMATION:
      return { ...state, ['confirmationIsOpen']: action.payload };
      
    default:
      return state;
  }
}