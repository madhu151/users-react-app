import { combineReducers } from 'redux';
import { addOrEditUserReducer } from './addOrEditUser';
import { userDetailsReducer } from './userDetails';

export default combineReducers({
    userDetailsReducer,
    addOrEditUserReducer
});
