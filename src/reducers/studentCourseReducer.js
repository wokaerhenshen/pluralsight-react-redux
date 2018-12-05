import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function studentCourse(state = initialState.studentCourse, action) {
    switch(action.type){
        case types.LOAD_STUDENT_COURSES_SUCCESS:
            return action.studentCourses;
    
        case types.CREATE_STUDENT_COURSE_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.studentCourse)
            ];        

        default:
            return state;
    }
}