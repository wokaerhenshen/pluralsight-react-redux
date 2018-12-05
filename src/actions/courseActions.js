 import CourseApi from '../api/mockCourseApi';
 import * as types from './actionTypes';
 import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function deleteCourseSuccess(courseId){
  //console.log(course)
  return {type: types.DELETE_COURSE_SUCCESS, courseId};
}

// Functions below handle asynchronous calls.
// Each returns a function that accepts a dispatch.
// These are used by redux-thunk to support asynchronous interactions.
export function loadCourses() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return CourseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return CourseApi.saveCourse(course).then(course => {
      //console.log(course);
      course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deleteCourse(course){
  //console.log(course);
  return function(dispatch,getState){
    //dispatch(beginAjaxCall());
    //console.log(course.id);
    //debugger;
    return CourseApi.deleteCourse(course.id).then(courseId=>{
      //console.log(courseId);
      dispatch(deleteCourseSuccess(courseId));
    }).catch(error=>{
      //dispatch(ajaxCallError(error));
      throw(error);      
    });
  };
}