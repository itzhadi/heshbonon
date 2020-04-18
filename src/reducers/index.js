import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import dateReducer from './dateReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    datePicker: dateReducer
})