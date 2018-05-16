import types from '../actions/types';

const DEFAULT_STATE = {
    all: [],
    single: {}
    //anytime your adding state it needs a default state
};
// simple setup for reducers 
export default (state = DEFAULT_STATE, action) => {
    switch( action.type ) {
        case types.GET_LIST_DATA:
            console.log('get list data action', action);
            return {...state, all:action.payload.data.todos};
        case types.GET_SINGLE_ITEM:
        //  destructor the object to keep the state in complete piece
            return {...state, single: action.payload.data.todo};
        default: 
            return state;
    }
}
