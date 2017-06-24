import { combineReducers } from 'redux';
import question from './questionReducer';

const rootReducer = combineReducers({
    question
});

export default rootReducer;