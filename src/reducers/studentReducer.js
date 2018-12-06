import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function students(state = initialState.students, action) {
    switch(action.type){
        case types.LOAD_STUDENTS_SUCCESS:
            return action.students;

        default:
            return state;
    }
}
//