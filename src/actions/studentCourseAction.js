import * as types from './actionTypes';
import StudentCourseApi from '../api/mockStudentCourseApi'

export function loadStudentCourseSuccess(studentCourses){
    return {type:types.LOAD_STUDENT_COURSES_SUCCESS,studentCourses};
}

export function saveStudentCourseSuccess(studentCourse){
    return {type:types.CREATE_STUDENT_COURSE_SUCCESS,studentCourse};
}

export function loadStudentCourses(){
    return function (dispatch){
        return StudentCourseApi.getAllStudentCourses().then(
            studenCourses=>{
                dispatch(loadStudentCourseSuccess(studenCourses));
            }).catch(error=>{
            throw(error);
        });
    };
}

export function saveStudentCourse(studenCourse){
    return function(dispatch){
        return StudentCourseApi.saveStudentCourse(studenCourse).then(studenCourse=>{
            dispatch(saveStudentCourseSuccess(studenCourse));
        }).catch(error=>{
            throw(error);
        })
    }
}