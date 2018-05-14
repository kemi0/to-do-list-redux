import types from '../actions/types';

const DEFAULT_STATE = {
    all: []
};
// simple setup for reducers 
export default (state = DEFAULT_STATE, action) => {
    switch( action.type ) {
        case types.GET_LIST_DATA:
            console.log('get list data action', action);
            return {...state, all:action.payload.data.todos};
        default: 
            return state;
    }
}
