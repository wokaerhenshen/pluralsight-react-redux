 import * as types from '../actions/actionTypes';
 import initialState from './initialState';
import { debug } from 'util';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function courses(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    case types.CREATE_COURSE_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.course)
      ];

    case types.UPDATE_COURSE_SUCCESS:
    // select all the course which id not equl to the course 
    //which we updated adding with this updated course combine
    // together to the new state
      //debugger;
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];

    case types.DELETE_COURSE_SUCCESS:
        //console.log(state);
        //console.log(action);
        return [
          ...state.filter(course => course.id !== action.courseId)
        ];
      

    default:
      return state;
  }
}