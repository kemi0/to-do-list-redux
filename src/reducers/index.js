import { combineReducers } from 'redux';
import reducerlist from './reducer_list';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({ 
    list: reducerlist,
    form: formReducer
});