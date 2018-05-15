import types from './types'
//build folders that you can import into first. build inside out 
import axios from 'axios';

// saving the api into a const
const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=c318demouser';



export function getListData() {
    const response = axios.get(`${BASE_URL}/todos${API_KEY}`);

        // you have to refrence it by how you import 
    return {
        type: types.GET_LIST_DATA,
        payload: response
    }
}

export function addToDoItem(item){
    const response = axios.post(`${BASE_URL}/todos${API_KEY}`, item);

    return {
        type: types.ADD_ITEM,
        payload: response
    }
}

