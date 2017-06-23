import { combineReducers } from 'redux';
import questions from './questionReducer';

const rootReducer = combineReducers({
    questions
});

export default rootReducer;